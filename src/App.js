import './App.css';
import Navbar from './components/Navbar.js';
import Landing from './components/LandingPage.js';
import Shop from './components/Shop.js';
import Filter from './components/Filter.js';
import snowboards from './data.json';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
    let [menu, setMenu] = useState(false);
    let [brand, setBrand] = useState('');


    return (
        <div className='app'>
        <Navbar menu={ menu } setMenu={ setMenu } />

        <div className='routes-container'>
        <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/shop' 
        element={<Shop brand={brand} setBrand={setBrand} snowboards={snowboards} />} />
        <Route path='/' element={<Landing />} />
        </Routes>
        </div>

        </div>
    )
}

export default App;
