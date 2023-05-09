import Vista from "./Vista";
import Login from "./Login";

const VistaLogin = () => {

    const sesion = localStorage.getItem('Sesion');

    return ( 
        <>
        
        { sesion ?
            <Vista />
        :
            <Login />
        }

        </>
    );
}

export default VistaLogin;