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
            text: "Hello, World!",
            bgColor: "salmon"
        }
        this.typeWriter = this.typeWriter.bind(this);
    }
    typeWriter() {
        const textArray = this.state.text.split("");
        console.log(textArray);
        return <p>{textArray[0]}</p>;
    }
    render() {
        return (
            <div className={this.state.bgColor}>{ this.typeWriter() }</div>
        )
    }
}

export default Box;