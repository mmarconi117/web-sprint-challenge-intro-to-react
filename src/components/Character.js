import axios from "axios";

import React, {useState, useEffect} from "react";

const Characters = (props) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((error) => {
        console.log("Error fetching characters", error);
      });
  }, [characters]);

  return (
    <div>
      {characters.map((character) => {
        return <div key={character.name}>{character.name}</div>;
      })}
    </div>
  );
};

export default Characters;
