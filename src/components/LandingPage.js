import '../App.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className='landing'>

        <div className='view-tab1'>
        <button>[ New Arrivals ]</button>
        <div className='background'>
        </div>
        </div>

        <div className='view-tab2'>

        <div className='content'>
        <div className='cont cont-img'>
        </div>
        <div className='cont cont-p'>
        <h2>Quisque Id Diam</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus. Lacus sed turpis tincidunt id aliquet risus feugiat. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Cursus in hac habitasse platea. Ipsum nunc aliquet bibendum enim facilisis.
        </p>
        </div>
        </div>

        <div className='content'>
        
        <div className='cont cont-p'>
        <h2>Quisque Id Diam</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus. Lacus sed turpis tincidunt id aliquet risus feugiat. Mauris sit amet massa vitae tortor condimentum lacinia quis vel. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Cursus in hac habitasse platea. Ipsum nunc aliquet bibendum enim facilisis.
        </p>
        </div>
        <div className='cont cont-img2'>
        </div>
        </div>

        </div>

        <div className='view-tab3'>

        <h1>Brands</h1>

        <div className='brands'>
        <Link to='/shop'><div className='brand brand-capita'></div></Link>
        <Link to='/shop'><div className='brand brand-bataleon'></div></Link>
        <Link to='/shop'><div className='brand brand-burton'></div></Link>
        </div>

        </div>


        </div>
    );
}

export default LandingPage;
