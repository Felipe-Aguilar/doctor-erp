import { NavLink } from 'react-router-dom';

import FotoPerfil from '../assets/Perfil.png';

const SideBar = () => {
    return ( 
        <div className="col-lg-3 sidebar">

            <div className="encabezado">
                <div>
                    <img src={FotoPerfil} className='img-fluid'/>
                </div>
                <div>
                    <h1>Doctor</h1>
                    <p>
                        Dr. Standart
                    </p>
                </div>
            </div>

            <hr/>

            <div className='cuerpo'>
                <NavLink className='active' to={'/'}>
                    <i className="bi bi-house"></i>
                    Home
                </NavLink>

                <NavLink to={'/pacientes'}>
                    <i className="bi bi-people-fill"></i>
                    Pacientes
                </NavLink>
                <NavLink to={'/consultas'}>
                    <i className="bi bi-card-checklist"></i>
                    Consultas
                </NavLink>
                <NavLink to={'/citas'}>
                    <i className="bi bi-calendar3"></i>
                    Citas
                </NavLink>
            </div>

        </div>
    );
}

export default SideBar;