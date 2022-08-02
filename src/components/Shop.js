import snowboards from '../data.json';
import SnowboardCards from './SnowboardCards.js';
import Filter from './Filter.js';
import { useState, useEffect } from 'react';


function Shop({ snowboards, brand, setBrand }) {
    let [filter, setFilter] = useState([]);
    let [terrain, setTerrain] = useState('')
    let [size, setSize] = useState('')

    const handleClick = (e) => {
        console.log(e.target.id)
        console.log(e.target.className)
        switch (e.target.className) {
            case 'brand-btn sb-btn':
                setBrand(e.target.id)
                break;
            case 'terrain-btn sb-btn':
                setTerrain(e.target.id)
                break;
            case 'size-btn':
                setSize(e.target.id)
                break;
        }
        setFilter([...filter, e.target.id])
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [filter])

    return (
        <div className='shop-page'>


        <div className='sidebar'>
        <h3>Brands</h3>
        <div className='sidebar-btns'>
        <button onClick={handleClick} id='capita' className='brand-btn sb-btn'>Capita</button>
        <button onClick={handleClick} id='bataleon' className='brand-btn sb-btn'>Bataleon</button>
        <button onClick={handleClick} id='burton' className='brand-btn sb-btn'>Burton</button>
        </div>

        <h3>Terrain</h3>
        <div className='sidebar-btns'>
        <button onClick={handleClick} id='all mountain' className='terrain-btn sb-btn'>All Mountain</button>
        <button onClick={handleClick} id='park' className='terrain-btn sb-btn'>Park</button>
        <button onClick={handleClick} id='powder' className='terrain-btn sb-btn'>Powder</button>
        <button onClick={handleClick} id='resort' className='terrain-btn sb-btn'>Resort</button>
        </div>

        <h3>Size</h3>
        <div className='size-btns'>
        <button onClick={handleClick} id='150' className='size-btn'>150</button>
        <button onClick={handleClick} id='152' className='size-btn'>152</button>
        <button onClick={handleClick} id='154' className='size-btn'>154</button>
        <button onClick={handleClick} id='156' className='size-btn'>156</button>
        <button onClick={handleClick} id='158' className='size-btn'>158</button>
        <button onClick={handleClick} id='160' className='size-btn'>160</button>
        <button onClick={handleClick} id='162' className='size-btn'>162</button>
        <button onClick={handleClick} id='164' className='size-btn'>164</button>
        </div>

        </div>

        <div className='shop-body'>
        {filter.length == 0
            ? <SnowboardCards 
            filter={filter}
            snowboards={snowboards} 
            />
            : <Filter 
            filter={filter}
            snowboards={snowboards}
            brand={brand}
            setBrand={setBrand}
            terrain={terrain}
            size={size}
            />
        }
        </div>


        </div>
    )
}

export default Shop;

