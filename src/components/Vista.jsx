import { Routes, Route } from 'react-router-dom';

import Home from './Home';

const Vista = () => {
    return ( 
        <div className="vista">
            
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>

        </div>
    );
}

export default Vista;