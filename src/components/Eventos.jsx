function Eventos({numero}) {

    function cadastrarUsuario() {
        alert(`Castrei ${numero}`)
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={cadastrarUsuario}>Enviar</button>
        </div>
    )
}

export default Eventos