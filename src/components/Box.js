// Box controls background color
// Box conrols text generator since Box has no other use.
// Box controls its entry/exit animation (use interval to trigger entry animation)
// Box controls its text animation
import React from 'react';
import styled from 'styled-components';
import './Box.css';

const Container = styled.div`
    padding: 10%;
    display: flex;
    justify-content: flex-start;
`;
const AnimatedText = styled.h1`
  overflow: hidden;
  border-right: 0.5px solid white;
  white-space: nowrap;
  letter-spacing: 0.75;
  animation:
    typing 3s steps(25, end),
    blink-caret .75s step-end infinite;
`;

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
            <Container className={`box ${this.state.bgColor}`}>
                <AnimatedText className="animated-text">{ this.state.text }</AnimatedText>
            </Container>
        )
    }
}

export default Box;