import React, { useState, useEffect } from "react";
import CardList from "./Card-List/Card-list";
import SearchBox from "./SearchBox/SearchBox";

function App() {


  const [monsters, setChange] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setChange(users)
      );
  }, []);

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })

    function handleChange(event) {
      setSearchField(event.target.value);
    }

  return (
    <div className="App">
      <h1>Monsters App</h1>
      <SearchBox
      placeholder={"Search Monster"}
      handleChange = {handleChange}
       />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
