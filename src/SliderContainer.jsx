import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import './SliderContainer.scss';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default function ContinuousSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
        <div className="slider-container">
        <InputLabel className="slider-label">{props.label}</InputLabel>
        <Slider valueLabelDisplay="auto" max="1000" defaultValue={props.value} vonChange={handleChange} aria-labelledby="continuous-slider" />
        </div>
    </div>
  );
}

