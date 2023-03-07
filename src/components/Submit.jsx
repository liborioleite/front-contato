function Submit() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(`cadastrei`)
    }

    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" placeholder="Digite seu nome..." />
                </div>
                <div>
                    <label htmlFor="senha">Senha: </label>
                    <input type="password" id="senha" placeholder="Digite sua senha..." />
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default Submit