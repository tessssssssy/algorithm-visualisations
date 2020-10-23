import React from "react";

const Column = (props) => {
  const columnStyles = {
    height: props.height,
    backgroundColor: props.highlighted
      ? "cornflowerblue"
      : `rgb(${150},${props.number * 4},${256 - props.number * 4})`,
    height: `${props.number * 8}px`,
    width: `5px`,
  };
  return <div style={columnStyles} />;
};

export default Column;
