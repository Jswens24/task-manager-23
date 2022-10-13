import React, { useState } from 'react';
import ListDisplay from './ListDisplay';
import { useFormik } from 'formik';

const AddTask = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [category, setCategory] = useState('');

    const handleClick = (e) => {
        setList([...list, {
            task: input,
            category: category
        }]);
        setInput('')
    };

    const deleteTask = (index) => {
        const newState = list;
        newState.splice(index, 1);
        setList([...newState]);
    };

    const formik = useFormik({
        initialValues: {
            task: '',
            category: null
        },

        onSubmit: (values) => {
            setList([...list, values]);
            formik.handleReset()
        }
    });

    return (
        <div>
            <h1>Add Task</h1>
            <form className="task-form" onSubmit={formik.handleSubmit}>
                <input
                    type='text'
                    value={formik.values.task}
                    name='task'
                    placeholder='Add task'
                    onChange={formik.handleChange}
                />
                <select
                    onChange={formik.handleChange}
                    name='category'
                    value={formik.values.category}
                >
                    <option selected disabled defaultValue >Category</option>
                    <option value='Personal'>Personal</option>
                    <option value='Work'>Work</option>
                    <option value='Errands'>Errands</option>
                </select>
                <button type='submit'>Add Task</button>
            </form>
            <ListDisplay deleteTask={deleteTask} list={list} />
        </div>
    )
};

export default AddTask;