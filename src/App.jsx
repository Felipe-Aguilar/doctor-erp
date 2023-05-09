import 'bootstrap-icons/font/bootstrap-icons.css';

import Login from './components/Login';
import SideBar from "./components/SideBar";
import Vista from './components/Vista';

const App = () => {
  return ( 
    <div className="aplication container-fluid vh-100">
      <div className="d-flex h-100" style={{gap: '20px'}}>
        
        {/* <Login /> */}

        {

        }
        <SideBar />
        <Vista />

      </div>
    </div>
  );
}

export default App;