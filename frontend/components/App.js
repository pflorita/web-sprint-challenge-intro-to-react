import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([]);
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    async function fetchData() {
      try {
        const [response1, response2] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets)
        ]);
        
        const people = response1.data;
        const planets = response2.data;

        const combinedData = people.map(person => {
          const homeworld = planets.find(planet => planet.id === person.homeworld);
          return {...person, homeworld};
        });

        setCharacters(combinedData);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map(character => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
