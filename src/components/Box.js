// Box controls background color
// Box conrols text generator since Box has no other use.
// Box controls its entry/exit animation
// Box controls its text animation
import React from 'react';
import './Box.css';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            bgColor: this.props.bgColor,
        }
    }
    render() {
        return (
            <div className={`box ${this.state.bgColor}`}>
                <h1>{ this.state.text }</h1>
            </div>
        )
    }
}

export default Box;