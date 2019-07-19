import React from 'react';
import styled from 'styled-components'

const CardStyleDiv = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
`;


const CardStyle = styled.h2`
    color: blue;
    margin: 0;
`;


export default function CharacterCard(props) {
    return (
        <div>
            <CardStyleDiv>
                <CardStyle>{props.name}</CardStyle>
                <CardStyle>Hair Color:{props.hair}</CardStyle>
            </CardStyleDiv>
        </div>
    )
}