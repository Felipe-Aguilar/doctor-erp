import { useNavigate } from "react-router-dom";

const Pacientes = () => {

    const navigate = useNavigate();

    return ( 
        <div className="vista">
            <h2>Pacientes</h2>

            <div className="cuerpo">
                
                <form>
                    <div>
                        <label>Paciente</label>
                        <div className="d-flex" style={{gap: '10px'}}>
                            <input type="text" className="w-75"/>
                            <button onClick={()=>navigate('/nuevo-paciente')}>
                                <i className="bi bi-plus-circle"></i>
                                Nuevo
                            </button>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label>Datos Generales:</label>
                        <hr/>
                        <div>
                            <ul>
                                <ol>Talla: 05</ol>
                                <ol>Peso: 05</ol>
                                <ol>Antecedentes: Lorem, ipsum dolor.</ol>
                                <ol>Alergias: Lorem ipsum dolor sit.</ol>
                                <ol>Enf Importantes: Lorem ipsum dolor sit amet consectetur.</ol>
                            </ul>
                            <div className="d-flex justify-content-between">
                                <button onClick={()=>navigate('/consultas')}>
                                    Abrir consulta
                                    <i className="bi bi-arrow-up-right-circle-fill" 
                                        style={{marginRight: '0', marginLeft: '10px'}}
                                    ></i>
                                </button>
                                <button>
                                    <i className="bi bi-pencil-square"></i>
                                    Editar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label>Historia Clínica</label>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Dx</th>
                                        <th>Diagnóstico</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>14/04/2021</th>
                                        <th>Dx</th>
                                        <th>DIAGNÓSTICO DE ESA FECHA</th>
                                    </tr>
                                    <tr>
                                        <th>14/04/2021</th>
                                        <th>Dx</th>
                                        <th>DIAGNÓSTICO DE ESA FECHA</th>
                                    </tr>
                                    <tr>
                                        <th>14/04/2021</th>
                                        <th>Dx</th>
                                        <th>DIAGNÓSTICO DE ESA FECHA</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default Pacientes;