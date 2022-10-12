import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Betty from './Betty';
import Jessica from './Jessica';
import Kobuk from './Kobuk';

const TeamScreen = () => {

    return (
        <div>
            <h1>Meet the Team!</h1>
            <h2>Pick a Team Member</h2>
            <Link to='/team/betty'>
                <button>Betty</button>
            </Link>
            <Link to='/team/jessica'>
                <button>Jessica</button>
            </Link>
            <Link to='/team/kobuk'>
                <button>Kobuk</button>
            </Link>
            <Routes>
                <Route path='/betty' element={<Betty />} />
                <Route path='/jessica' element={<Jessica />} />
                <Route path='/kobuk' element={<Kobuk />} />
            </Routes>
        </div>
    )
};

export default TeamScreen;