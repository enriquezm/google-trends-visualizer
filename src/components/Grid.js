import React from 'react';
import styled from 'styled-components';
import Box from './Box';

const Container = styled.div`
    display: grid;
    height: 100%;
    grid-gap: 0px;
    grid-template-columns: repeat(auto-fill, minmax( 225px, 1fr));
    justify-content: start;
    align-content: space-evenly;
`;

const Grid = props => (
    <Container>
        {
        props.animals.map((animal, index) => 
            <Box size={props.size} key={index} bgColor={props.bgColor()} text={animal} />
        )
        }
    </Container>
)

export default Grid;