import { Route, Routes } from "react-router-dom";

import Sidebar from "./SideBar";
import Home from "./Home";
import Pacientes from "./Pacientes";
import Consultas from "./Consultas";
import NuevoPaciente from "./NuevoPaciente";

const Vista = () => {
    return ( 
        <>
            <Sidebar />

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pacientes" element={<Pacientes />}/>
                <Route path="/consultas" element={<Consultas />}/>
                <Route path="/nuevo-paciente" element={<NuevoPaciente />}/>
            </Routes>
        </>
    );
}

export default Vista;