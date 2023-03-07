function Pessoa({ foto, nome, sobrenome, idade, profissao, sexo }) {
    return (
        <div>
            <img src={foto} alt="Foto da pessoa" />
            <h2>Nome: {nome}</h2>
            <h2>Sobrenome: {sobrenome}</h2>
            <h2>Idade: {idade}</h2>
            <h2>Profissão: {profissao}</h2>
            <h2>Sexo: {sexo}</h2>
        </div>
    )
}

export default Pessoa





// function Pessoa({ nome, sobrenome, idade, profissao, sexo }) {
//     return (
//         <div>
//             <img src={foto} alt="Foto da pessoa" />
//             <h2>Nome: {nome}</h2>
//             <h2>Sobrenome: {sobrenome}</h2>
//             <h2>Idade: {idade}</h2>
//             <h2>Profissão: {profissao}</h2>
//             <h2>Sexo: {sexo}</h2>
//         </div>
//     )
// }

// export default Pessoa