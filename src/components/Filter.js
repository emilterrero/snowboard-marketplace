import '../App.css';
import snowboards from '../data.json';

function Filter({snowboards, filter, brand, terrain, size}) {
    let filtered = snowboards.map(snowboard => {
        if (snowboard.brand === brand 
            || snowboard.bestFor === terrain
        ) {
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
        }
    })

    return (
        <div className='shop-filter shop-body'>
        {filtered}
        </div>
    )
}

export default Filter;

