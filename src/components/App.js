/* SECCIÓN DE IMPORT: de React, componentes, SASS, imágenes*/

import { useEffect, useState } from 'react';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';

import Filters from './Filters/Filters';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import CharacterDetail from './List/CharacterDetail';
import List from './List/List';

function App() {

  // STATE VARIABLES
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchHouse, setSearchHouse] = useState('gryffindor');
  const [searchName, setSearchName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  // FETCH
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${searchHouse}`)
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.map(eachCharacter => ({
          actor: eachCharacter.actor,
          alive: eachCharacter.alive,
          ancestry: eachCharacter.ancestry,
          student: eachCharacter.hogwartsStudent,
          house: eachCharacter.house,
          id: eachCharacter.id,
          image: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
          nicknames: 
        }))
        setAllCharacters(cleanData)
      });
  }, [searchHouse])

  // HANDLER FUNCTIONS
  const handleSelectHouseLift = (value) => {
    setSearchHouse(value)
  }

  const handleInputNameLift = (value) => {
    setSearchName(value)
  }

  // FILTER FOR INPUT NAME

  const filteredCharacters = allCharacters
    .filter((eachCharacter) => {
      if (eachCharacter.name.toLowerCase().includes(searchName.toLowerCase())) {
        return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase())
      } else {
        // setErrorMsg(<p>No está</p>)
        return console.log('HOLI');
      }
    })

  // const species = allCharacters
  //   .map(each => each.alive)

  // console.log(species);

  // USELOCATION FOR ID DYNAMIC PAGE
  const { pathname } = useLocation()

  const routeData = matchPath("/character/:id", pathname)

  const characterId = routeData === null ? null : routeData.params.id

  // FIND() TO FIND CLICKED CHARACTER

  const findCharacter = allCharacters.find(eachCharacter => eachCharacter.id === characterId)

  return <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/characters/' element={
          <>
            <Filters
              handleSelectHouseLift={handleSelectHouseLift}
              handleInputNameLift={handleInputNameLift}
              searchNameP={searchName}
            />
            <List filteredCharactersP={filteredCharacters}
              errorMsgP={errorMsg}
            />
          </>} />
        <Route path='/character/:id'
          element={<CharacterDetail
            findCharacterP={findCharacter}
          />}
        />
      </Routes>
    </main>
    <Footer></Footer>
  </div>;
}

export default App;
