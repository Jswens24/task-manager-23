import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const [pokeParam, setPokeParam] = useState('')

    const navigate = useNavigate();

    const handleClick = () => {
        alert('button clicked')
        navigate(`/details/${pokeParam}`)

    };

    const inputHandler = (e) => {
        setPokeParam(e.target.value)
    }

    return (
        <div>
            <h1>Welcome Home!</h1>
            <input onChange={inputHandler} type='text' placeholder='enter a pokemon' />
            <button onClick={handleClick}>Go to Pokedex!</button>
        </div>
    )
};

export default HomeScreen;