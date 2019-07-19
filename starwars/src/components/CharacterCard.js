import React from 'react';
import styled from 'styled-components'


const CardStyleDiv2 = styled.div`
    margin: 10px;
    display: flex;
`;

const CardStyleH2 = styled.h2`
    color: blue;
    margin: 0;
`;

const CardStyleH3 = styled.h3`
    color: black;
    margin: 0;
`;


export default function CharacterCard(props) {
    return (
        <div>
                <CardStyleDiv2>
                    <CardStyleH2>{props.name} </CardStyleH2>
                    <CardStyleH3>   Hair Color:{props.hair}</CardStyleH3>
                </CardStyleDiv2>

            
        </div>
    )
}