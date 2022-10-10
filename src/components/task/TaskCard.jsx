import React from 'react';

const TaskCard = ({ item, deleteTask, index }) => {

    return (
        <div className='item-card'>
            <div className="item-card-left">
                <h3>{item.task}</h3>
                <h5>{item.category}</h5>
            </div>
            <button onClick={() => deleteTask(index)} className="small-btn">X</button>
        </div>
    )
};

export default TaskCard;