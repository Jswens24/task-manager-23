import React from 'react';

const ListDisplay = (props) => {
    const display = props.list.map((task) => {
        return <h2>{task}</h2>
    });

    return (
        <div>
            <h2>My Tasks</h2>
            {display}
        </div>
    )
};

export default ListDisplay;