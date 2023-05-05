import { useCallback, useContext, useState } from 'react';
import imagenPerfil from '../assets/Perfil.png';

import { LoginContext } from '../context/LoginContext';

const Login = () => {

    const usuarios = [
        {
            usuario: 'admin',
            password: '123456'
        }
    ]

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);

    const { setLoginValue } = useContext(LoginContext);

    const comprobar = (e) =>{
        e.preventDefault();

        const sesion = usuarios.find(usuario => usuario.usuario === user && usuario.password === password);

        if (sesion) {
            setLoginValue(true);
            if (check) localStorage.setItem('Sesion', true);
        }else{
            
        }
    }

    return ( 
        <div className="d-flex justify-content-center align-items-center login">
            <div className="cuerpo">
                <div className="header">
                    <div>
                        <img src={imagenPerfil} className='img-fluid' />
                        <h1>Dr. Lorem</h1>
                    </div>
                </div>

                <div className='body'>
                    <form onSubmit={comprobar}>
                        <label>Usuario</label>
                        <input 
                            type="text"
                            value={user}
                            onChange={(e)=>setUser(e.target.value)}
                        />
                        
                        <label htmlFor="">Contraseña</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />

                        <div className='check'>
                            <label htmlFor='check'>Mantener sesión iniciada</label>
                            <input 
                                type="checkbox" 
                                id='check'
                                value={check}    
                                onChange={(e)=>setCheck(e.target.checked)}
                            />
                        </div>

                        <div className='btn-login'>
                            <button type='submit'>Iniciar sesión</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;