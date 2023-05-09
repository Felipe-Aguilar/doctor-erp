const NuevoPaciente = () => {
    return ( 
        <div className="vista">
            <h2>Nuevo Paciente</h2>

            <div className="cuerpo">
                <form>
                    <label>Nombre del Paciente:</label>
                    <input type="text" />

                    <div className="d-flex mt-4" style={{gap: '50px'}}>
                        <div>
                            <label>Fecha de Nacimiento</label>
                            <input type="date" />
                        </div>
                        <div>
                            <label>Alergias</label>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label>Antecedentes</label>
                        <input type="text" />
                    </div>

                    <div className="mt-4">
                        <label>Enfermedades Pre Existentes</label>
                        <input type="text" />
                    </div>

                    <div className="mt-4">
                        <label>Observaciones</label>
                        <textarea></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NuevoPaciente;