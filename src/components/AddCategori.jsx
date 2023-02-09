import { useState } from "react"

export const AddCategori = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }
    const onSumit = (event) => {
        event.preventDefault();
        // mandamos un colback categorias anteriores y incertamos
        // el nuevo imput, seguido de la desestructuracion de las categorias anteriorres

        if( inputValue.trim().length <= 1){
            return alert('rellenar el campo')
        };
        onNewCategory(inputValue.trim());
        setInputValue('');
    } 

    return (
        <form action="" onSubmit={(event) => onSumit(event)}>
            <input type="text" name="" id=""
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
