import axios from "axios";
import React, { useEffect, useState } from "react";
import AOTCharacterCard from "./AOTCharacterCard";

function AOTCharacters() {
  const [name, setName] = useState("");
  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    characters.length !== 0 ? setCharacters([]) : null;
    const url = `https://api.attackontitanapi.com/characters?name=${name}`;
    axios.get(url).then((res) => {
      const filteredData = res.data.results.map((character) => ({
        id: character.id,
        name: character.name,
        age: character.age,
        img: character.img.split(".png")[0] + ".png",
        gender: character.gender,
        occupation: character.occupation,
      }));
      setCharacters(filteredData);
      setName("");
    });
  };

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <div>
      <div className="main">
        <div className="search">
          <h1>Personajes de Attack on Titan</h1>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name.toLowerCase()}
            placeholder="Buscar por nombre"
          />
          {name && <button onClick={getCharacters}>buscar</button>}
        </div>
        <div className="card-container">
          {characters.length !== 0 &&
            characters.map((character) => (
              <AOTCharacterCard key={character.id} data={character} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AOTCharacters;
