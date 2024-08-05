import { useEffect } from "react";
import { useState } from "react";

export default function GetPosts() {
  const [data, setData] = useState([]);
  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => console.log(responseData.results.episode));
  }, []);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results));
  }, []);

  return (
    <>
      {!personaje ? (
        <p>Loading...</p>
      ) : (
        <div className="g">
          {data.map((data, index) => (
            <div className="fondoG" key={index}>
              <h2>Nombre Completo: {data.name}</h2>
              <p>Locacion: {data.location.name} </p>
              <div className="fotito">
                <img src={data.image} />
              </div>
              <li>Episodios: {personaje.episode}</li>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
