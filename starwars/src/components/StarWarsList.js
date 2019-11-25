import React, {useState, useEffect} from "react";
import axios from "axios";
import StarWarsCards from "./StarWarsCards";

function StarWarsList () {
  const [cards, setCards] = useState([]);


  useEffect(() => {
    axios.get("https://swapi.co/api/people")
    .then(response => {
      const charData = response.data.results;

      setCards(charData);
    })
    .catch(error => {
      console.log("There is nothing to display", error)
    })
  }, []);


  return (
    <div className = "container">
      <div className = "people">
      {cards.map((card, index) => { 
        return (
          <StarWarsCards
            key={index}
            name={card.name}
            birth_year={card.birth_year}
            eye_color={card.eye_color}
            gender={card.gender}
            created={card.created}
          />
        )
      })  
    }

  </div>

  </div>

  )
}

export default StarWarsList