import React, { useState } from 'react';
import styled from 'styled-components'

const ButtonStyles = styled.button`
    border-radius: 7px;
    border: 1px solid #443e3e;
    box-shadow: 1px 1px 1px 1px #fff; 

`;

export default function Button() {
    const[likes, setLikes] = useState(0)
    const[dislikes, setDislikes] = useState(0)
    return (
        <div>
            <ButtonStyles onClick={() => setLikes(likes +1)}>Likes: {likes}</ButtonStyles>
            <ButtonStyles onClick={() => setDislikes(dislikes +1)}>Dislikes: {dislikes}</ButtonStyles>
        </div>
    )
}