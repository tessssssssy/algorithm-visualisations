import React from 'react';

class Column extends React.Component {
    render() {
        const columnStyles = { 
            "height" : this.props.height,
            "backgroundColor": this.props.highlighted ? "cornflowerblue" : "lightblue",
            "height" : `${this.props.number}px`,
            "width": "2px"
    }
        return (
            <div style={columnStyles}/>
        )
    }
}

export default Column;