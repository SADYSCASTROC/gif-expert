import { useState } from "react";
import { AddCategori,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categorias, setCategoria] = useState(['ONE PUNCH']);


    const onAddCaategria = (newCategory) => {

        if (categorias.includes(newCategory.toUpperCase())) return alert('La categoria existe');
        setCategoria([newCategory.toUpperCase(), ...categorias]);
    }
    return (

        <>
            <h1>GifExpertApp</h1>

            <AddCategori onNewCategory={(value) => onAddCaategria(value)} />

            {
                categorias.map(categoria => (
                    <GifGrid key={categoria}
                        categoria={categoria} />
                )
                )
            }

        </>
    )
}
