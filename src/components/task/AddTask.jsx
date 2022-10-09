import React, { useState } from 'react';
import ListDisplay from './ListDisplay';

const AddTask = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const handleClick = (e) => {
        setList([...list, input]);
    };

    return (
        <div>
            <h1>Add Task</h1>
            <input type='text' placeholder='add task' onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>Add Task</button>
            <ListDisplay list={list} />
        </div>
    )
};

export default AddTask;