import { Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

import VistaLogin from "./components/VistaLogin";
import Vista from "./components/Vista";


const App = () => {
  return ( 

    <div className="aplication container-fluid vh-100">
      <div className="d-flex h-100" style={{gap: '20px'}}>

        <VistaLogin />

      </div>
    </div>


  );
}

export default App;