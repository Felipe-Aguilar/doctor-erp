import { useState } from 'react';

import imagenPerfil from '../assets/Perfil.png';
import Vista from './Vista';

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
    const [login, setLogin] = useState(false);

    const [errores, setErrores] = useState([]);

    const comprobar = (e) =>{
        e.preventDefault();

        if (user === '' || password === '') {
            setErrores(errores.concat('Falta uno o más campos por llenar.'));
            return;
        }

        const sesion = usuarios.find(usuario => usuario.usuario === user && usuario.password === password);

        if (sesion) {
            if (check) localStorage.setItem('Sesion', true);
            setLogin(true);
        }else{
            setErrores(errores.concat('Usuario o contraseña incorrectos.'));
        }
    }

    return ( 
        <>
            { !login ?
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

                                { errores.length > 0 &&
                                    <div className='error'>
                                        { errores.map((error, index) => (
                                            <p key={index}>
                                                <i className="bi bi-exclamation-circle"></i>
                                                {error}
                                            </p>
                                        ))}
                                    </div>
                                }

                                <div className='btn-login'>
                                    <button type='submit'>Iniciar sesión</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            :
                <Vista/>
            }
        </>
    );
}

export default Login;