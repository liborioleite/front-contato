function Formulario() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert('Cadastrou o usuário !')
        console.log('Cadastrou o usuário !');
    }

    return (
        <div>
            <h1>Meu Cadastro</h1>
            {/* Ao invés de colocar o evento no click do botão lá no input, colocamos o evento
            de submissão dentro do form, ou seja, quando o form for enviado ele irá disparar
            um evento */}
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome..." />
                </div>
                <div>
                    <input type="submit" value="Cdastrar" />
                </div>
            </form>
        </div>
    )
}
export default Formulario