/* SECCIÓN DE IMPORT: de React, componentes, SASS, imágenes*/

import { useEffect, useState } from 'react';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import callToApi from '../services/api';

import Filters from './Filters/Filters';
import Footer from './Footer/Footer';
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
    callToApi(searchHouse)
      .then(cleanData => {
        setAllCharacters(cleanData)
        console.log(cleanData);
      })
  }, [searchHouse])

  // HANDLER FUNCTIONS
  const handleSelectHouseLift = (value) => {
    setSearchHouse(value)
  }

  const handleInputNameLift = (value) => {
    setSearchName(value)
  }

  // FILTER FOR INPUT NAME AND SORT ALPHABETICALLY

  const filteredCharacters = allCharacters
    .filter((eachCharacter) => {
      if (eachCharacter.name.toLowerCase().includes(searchName.toLowerCase())) {
        return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase())
      } else {
        // setErrorMsg(<p>No está</p>)
      }
    })
    .sort((x, y) => x.name.localeCompare(y.name))

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
