/* SECCIÓN DE IMPORT: de React, componentes, SASS, imágenes*/

import { useEffect, useState } from 'react';
import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import callToApi from '../services/api';

import Filters from './Filters/Filters';
import Footer from './Footer/Footer';
import Landing from './Landing/Landing';
import CharacterDetail from './List/CharacterDetail';
import List from './List/List';
import NotFound from './List/NotFound';

function App() {

  // STATE VARIABLES
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchHouse, setSearchHouse] = useState('gryffindor');
  const [searchName, setSearchName] = useState('')
  const [isStudent, setIsStudent] = useState('all')

  // FETCH
  useEffect(() => {
    callToApi(searchHouse)
      .then(cleanData => {
        setAllCharacters(cleanData)
      })
  }, [searchHouse])

  // HANDLER FUNCTIONS
  const handleSelectHouseLift = (value) => {
    setSearchHouse(value)
  }

  const handleInputNameLift = (value) => {
    setSearchName(value)
  }

  const handleRadioStudentLift = (id) => {
    setIsStudent(id)
  }

  // FILTER FOR INPUT NAME AND SORT ALPHABETICALLY

  const filteredCharacters = allCharacters
    .filter((eachCharacter) => {
      return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase())
    })
    .filter(eachCharacter => {
      if (isStudent === 'all') {
        return true
      } else if (isStudent === 'yes') {
        return eachCharacter.student
      } else if (isStudent === 'no') {
        return !eachCharacter.student
      }
    })
    .sort((x, y) => x.name.localeCompare(y.name))

  // USELOCATION FOR ID DYNAMIC PAGE
  const { pathname } = useLocation()

  const routeData = matchPath("/character/:id", pathname)

  const characterId = routeData === null ? null : routeData.params.id;

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
              searchHouseP={searchHouse}
              isStudentP={isStudent}
              handleRadioStudentLift={handleRadioStudentLift}
            />
            <List filteredCharactersP={filteredCharacters}
            />
          </>} />
        <Route path='/character/:id'
          element={<CharacterDetail
            findCharacterP={findCharacter}
          />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
    <Footer></Footer>
  </div>;
}

export default App;
