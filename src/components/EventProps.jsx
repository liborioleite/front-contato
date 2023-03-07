import Button from "./Button";
function EventProps() {

    function meuEvento() {

        alert(`Ativando primeiro evento `)
        console.log(``);
    }
    function segundoEvento() {

        alert(`Ativando segundo evento `)
        console.log(``);
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            {/* Criando um componente de botão */}
            <Button event={meuEvento} text={"Primeiro Evento"} />
            <Button event={segundoEvento} text={"Segundo Evento"} />
        </div>
    )
}

export default EventProps