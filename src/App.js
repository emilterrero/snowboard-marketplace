import './App.css';
import Navbar from './components/Navbar.js';
import Landing from './components/LandingPage.js';
import Shop from './components/Shop.js';
import { Route, Routes } from 'react-router-dom';

function App() {


    return (
        <div className='app'>
        <Navbar />

        <div className='routes-container'>
        <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/' element={<Landing />} />
        </Routes>
        </div>

        </div>
    )
}

export default App;
