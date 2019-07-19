import React from 'react';
import styled from 'styled-components'

const CardStyle = styled.h2`
    color: blue;
`;


export default function CharacterCard(props) {
    return (
        <div>
            <CardStyle>{props.name}, {props.hair}</CardStyle>
        </div>
    )
}