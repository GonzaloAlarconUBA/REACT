//Hooks -> useState
import { useEffect, useState } from "react";


//camelcase es una manera de escribir en la cual cada palabra nueva arranca con mayuscula

export const Estado = () => {
    const [contador, setContador] = useState(0);


    const handleClick = () => {
        setContador(contador +1);
    };
//El useEffect se va a ejercutar la cantidad de veces que las dependencias se actualicen
//Si no le pasan dependencias se ejecutara solo al principio de la app
//En el primer render
//si no se le pasa el array de dependencia siempre se va a ejecutar
    useEffect(()=>{
        console.log("Se actualizo el contador")
    },[contador])

    const arrayPersonajes = [
        {
            name: 'Rick',
            lastName: 'Sanchez',
            planet: 'Earth',
            photo: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            name: 'Morty',
            lastName: 'Smith',
            planet: 'Earth',
            photo: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
    ];
    return (
    <>
        <div>
            {
                //Cuando despues de la funcion flecha hay parentesis significa que el return es implicito
                arrayPersonajes.map((personaje, index) => (
                    <div>
                        <h2>Full Name: {personaje.name}, {personaje.lastName} </h2>
                        <p>Planet: {personaje.planet}</p>
                        <img src={personaje.photo} alt="description"/>
                    </div>
                ))
                //Si lo queremos hace explicito hay que cambiar los parentesis
                //arrayPersonajes.map(() => {
                //  return(
                //  )})
            }
        </div>
        <button onClick={handleClick}>Aumentar</button>
        <p>{contador}</p>
    </>
    );
};
