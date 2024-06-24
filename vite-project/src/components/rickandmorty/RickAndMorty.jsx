import { useEffect } from "react";
import { useState } from "react";

export default function GetPosts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results));
  }, []);

  return (
    <>
      <div className="g">
        {data.map((data, index) => (
          <div className="fondoG" key={index}>
            <h2>Nombre Completo: {data.name}</h2>
            <p>Locacion: {data.location.name} </p>
            <div className="fotito">
              <img src={data.image} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}