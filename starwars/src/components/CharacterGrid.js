import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const CardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

// https://swapi.co/api/people/?format=json

export default function CharacterGrid() {
    const [charaName, setName] = useState([])

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/?format=json`)
            .then(response => {
                const theName = response.data.results
                console.log('is this it?:', theName)
                setName(theName)
            })
    }, [])

    return (
        <CardsDiv>
            {charaName.map(item => {
                    return <CharacterCard name={item.name} hair={item.hair_color} gender={item.gender} key={item.url} />
                })
            }
        </CardsDiv>
    )
}