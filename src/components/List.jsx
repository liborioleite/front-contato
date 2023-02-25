import Item from "./Item"
function List() {
    return (
        <div>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca={'Gol'} ano_lancamento={1990}/> 
                <Item marca={'Ferrari'} ano_lancamento={1985}/> 
                <Item marca={'FIAT'} ano_lancamento={1930}/> 
                <Item marca={'Chevrolet'} ano_lancamento={1980}/> 
                <Item marca={'Honda'} ano_lancamento={1950}/> 
            </ul>
        </div>
    )
}

export default List