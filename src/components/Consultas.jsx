const Consultas = () => {
    return ( 
        <div className="vista">
            <h2>Consulta Actual</h2>

            <div className="cuerpo">
                <form>
                    <div className="d-flex justify-content-center" style={{gap: '20px'}}>
                        <button>
                            <i className="bi bi-download"></i>
                            guardar 
                        </button>
                        <button>
                            <i className="bi bi-printer"></i>
                            Imprimir
                        </button>
                    </div>

                    <div className="d-flex justify-content-around mt-4" style={{gap: '5px'}}>

                        <div>
                            <label>Talla</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Peso</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Presión</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Temp</label>
                            <input type="text" />
                        </div>

                    </div>

                    <div className="mt-4">
                        <label>Descripción</label>
                        <textarea></textarea>
                    </div>

                    <div className="mt-4">
                        <label>Dx</label>
                        <input type="text" />
                    </div>
                    <hr/>

                    <div className="text-center">
                        <h6>Receta</h6>
                    </div>

                    <div className="d-flex align-items-center" style={{gap: '30px'}}>
                        <div>
                            <div className="">
                                <label>Medicamento</label>
                                <input type="text" />
                            </div>

                            <div className="mt-4">
                                <label>Dosis</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div>
                            <button>
                                <i className="bi bi-plus-circle"></i>
                                Agregar
                            </button>
                        </div>
                    </div>

                    <hr/>

                    <div>
                        <ol>
                            <div className="d-flex align-items-center" style={{gap: '100px'}}>
                                <div>
                                    <li>
                                        Nombre del Medicamento
                                        <span>Tomar 6 ml c/ 8 hrs x 6 días</span>
                                    </li>
                                </div>
                                <div>
                                    <button>
                                        <i className="bi bi-pen"></i>
                                        Editar
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex align-items-center" style={{gap: '100px'}}>
                                <div>
                                    <li>
                                        Nombre del Medicamento
                                        <span>Tomar 6 ml c/ 8 hrs x 6 días</span>
                                    </li>
                                </div>
                                <div>
                                    <button>
                                        <i className="bi bi-pen"></i>
                                        Editar
                                    </button>
                                </div>
                            </div>
                        </ol>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Consultas;