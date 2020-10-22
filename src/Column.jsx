import React from 'react';

class Column extends React.Component {
    render() {
        const columnStyles = { 
            "height" : this.props.height,
            "backgroundColor": this.props.highlighted ? "cornflowerblue" : `rgb(${150},${this.props.number * 4},${256 - (this.props.number * 4)})`,
            "height" : `${this.props.number * 8}px`,
            "width": `5px`,
    }
        return (
            <div style={columnStyles}/>
        )
    }
}

export default Column;