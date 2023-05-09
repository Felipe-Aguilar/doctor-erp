import ImagenHome from '../assets/home.webp';

const Home = () => {
    return ( 
        <div className="vista">
            <h2>Inicio</h2>
            <img src={ImagenHome} className='img-fluid' style={{display: 'block', margin: 'auto'}}/>
        </div>
    );
}

export default Home;