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
            bgColor: "salmon",
            animatedText: ""
        }
        this.typeWriter = this.typeWriter.bind(this);
    }
    typeWriter() {
        // Take text from props
        // turn into array
        // interate through array and update animatedText state on a timer
        const textArray = this.state.text.split("");
        for(let i = 0; i < textArray.length; i++) {
            this.setState({
                animatedText: this.state.animatedText + textArray[i]
            })
        }
    }
    render() {
        return (
            <div className={this.state.bgColor}>{ this.state.animatedText }</div>
        )
    }
}

export default Box;