import React from "react";

const Column = (props) => {
  const columnStyles = {
    backgroundColor: props.highlighted
      ? "cornflowerblue"
      : `rgb(${256},${props.number},${256 - (props.length - props.number)})`,
    height: `${(props.number / props.length) * 400}px`,
    width: props.width,
    maxWidth: '20px'
  };
  return <div style={columnStyles} />;
};

export default Column;
