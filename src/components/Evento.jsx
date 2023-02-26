function Evento({ numero }) {

    // O método dete possuir o mesmo nome que está sendo chamado na função de clique
    function meuEvento() {
        alert(`Opa, fui ativado ${numero}`)
        console.log(`Opa, fui ativado ${numero}`);
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>


            {/* Não colocamos a funçao de onClick chamando a função de evento da forma abaixo pois
            da forma abaixo com a invocação do metodo () ele irá já execcutar ao invés de agurdar
            o clique do botão
            <button onClick={meuEvento()}>Ativar</button> */}
        </div>
    )
}

export default Evento