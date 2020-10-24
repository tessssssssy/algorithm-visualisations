import React from "react";
import Column from "./Column";

import "./Sorter.scss";

class SorterClass extends React.Component {
  render() {
    console.log(this.props.columns)
    const randomVal = Math.floor(Math.random() * 256)
    const columnWidth = 1000 / this.props.columns.length
    return (
      <div className="sorter-container">
        <div className="columns-container">
          {
            this.props.columns.map((column) => {
              return <Column key={column} randomVal={randomVal} length={this.props.columns.length} number={column} highlighted={false} width={columnWidth}/>;
            })}
        </div>
      </div>
    );
  }
}

export default SorterClass;
