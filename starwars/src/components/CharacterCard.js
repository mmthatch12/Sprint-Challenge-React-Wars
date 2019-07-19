import React from 'react';
import styled from 'styled-components'


const CardStyleDiv2 = styled.div`
    margin: 10px;
    text-align: left;
    border: 1px solid #443e3e;
    box-shadow: 5px 1px #fff; 
    width: 40%;
`;

const CardStyleH2 = styled.h2`
    color: blue;
    margin: 0; 
`;

const CardStyleH3 = styled.h3`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
    margin: 0;
`;


export default function CharacterCard(props) {
    return (
        <div>
                <CardStyleDiv2>
                    <CardStyleH2>{props.name}</CardStyleH2>
                    <CardStyleH3>Hair Color:{props.hair}</CardStyleH3>
                    <CardStyleH3>Gender:{props.gender}</CardStyleH3>
                </CardStyleDiv2>

            
        </div>
    )
}