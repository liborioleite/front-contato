import { useState } from "react"
function EventoUseState() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(`${nome} e ${senha}`)
        console.log(nome, senha);
    }

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()


    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" placeholder="Digite seu nome..." onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="senha">Senha: </label>
                    <input type="password" id="senha" placeholder="Digite sua senha..." onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default EventoUseState