import React from 'react';
import styled from 'styled-components'

const CardStyle = styled.h2`
    color: blue;
    border:3px solid yellow;
`;


export default function CharacterCard( {name} ) {
    return (
        <div>
            <CardStyle>{name}</CardStyle>
        </div>
    )
}