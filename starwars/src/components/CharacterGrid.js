import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard'

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
        <div>
            {charaName.map(item => {
                return <CharacterCard name={item} />

            })}
        </div>
    )
}