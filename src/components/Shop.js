import snowboards from '../data.json';
import { useState, useEffect } from 'react';

function Shop({ snowboards }) {
    let [filter, setFilter] = useState([]);

    useEffect(() => {
        snowboards.map(snowboard => {
            console.log(snowboard.model)
        })
    }, [])

    return (
        <div className='shop-page'>


        <div className='sidebar'>
        <h2>Brands</h2>

        <div className='brand-btns'>
        <button className='brand-btn sb-capita'>Capita</button>
        <button className='brand-btn sb-bataleon'>Bataleon</button>
        <button className='brand-btn sb-burton'>Burton</button>
        </div>

        </div>

        <div className='shop-body'>
        {snowboards.map(snowboard => {
            return (
                <div className='snowboard-card'>
                <div className='snowboard-img' style={{ backgroundImage: `url(${snowboard.image})` }}>
                </div>
                <h3>{snowboard.model}</h3>

                </div>
            )
        })}

        </div>


        </div>
    )
}

export default Shop;

