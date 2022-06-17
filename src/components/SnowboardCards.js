import '../App.css'; 

function SnowboardCards({ snowboards, filter }) {

    return (
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
    )
}

export default SnowboardCards;
