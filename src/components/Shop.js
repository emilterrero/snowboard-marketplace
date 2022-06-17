import snowboards from '../data.json';
import { useState, useEffect } from 'react';

function Shop({ snowboards }) {
    let [filter, setFilter] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='shop-page'>


        <div className='sidebar'>
        <h3>Brands</h3>
        <div className='sidebar-btns'>
        <button className='brand-btn sb-btn'>Capita</button>
        <button className='brand-btn sb-btn'>Bataleon</button>
        <button className='brand-btn sb-btn'>Burton</button>
        </div>

        <h3>Terrain</h3>
        <div className='sidebar-btns'>
        <button className='terrain-btn sb-btn'>All Mountain</button>
        <button className='terrain-btn sb-btn'>Park</button>
        <button className='terrain-btn sb-btn'>Powder</button>
        <button className='terrain-btn sb-btn'>Resort</button>
        </div>

        <h3>Size</h3>
        <div className='size-btns'>
        <button className='size-btn'>150</button>
        <button className='size-btn'>152</button>
        <button className='size-btn'>154</button>
        <button className='size-btn'>156</button>
        <button className='size-btn'>158</button>
        <button className='size-btn'>160</button>
        <button className='size-btn'>162</button>
        <button className='size-btn'>164</button>
        </div>

        </div>

        <div className='shop-body'>
        {snowboards.map(snowboard => {
            return (
                <div className='snowboard-card'>
                <div className='snowboard-img' style={{ backgroundImage: `url(${snowboard.image})` }}>
                </div>
                <div className='card-info'>
                <h5>{snowboard.brand}</h5>
                <h3>{snowboard.model}</h3>
                <p>${snowboard.price}</p>
                </div>

                </div>
            )
        })}

        </div>


        </div>
    )
}

export default Shop;

