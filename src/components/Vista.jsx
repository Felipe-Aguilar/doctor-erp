import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Nuevo from './Nuevo';
import ConsultaActual from './ConsultaActual';

const Vista = () => {
    return ( 
        <div className="vista">
            
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/nuevo' element={<Nuevo />}/>
                <Route path='/consulta-actual' element={<ConsultaActual />}/>
            </Routes>

        </div>
    );
}

export default Vista;