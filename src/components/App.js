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
  const [errorMsg, setErrorMsg] = useState('')

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
    inputMsg()
  }

  const handleInputNameLift = (value) => {
    setSearchName(value)
    inputMsg()
  }

  const handleResetSelect = () => {
    setSearchHouse('gryffindor')
  }
  const handleResetInput = () => {
    setSearchName('')
  }
  const handleResetError = () => {
    setErrorMsg('')
  }



  // FILTER FOR INPUT NAME AND SORT ALPHABETICALLY

  const filteredCharacters = allCharacters
    // .filter(eachCharacter => {
    //   return eachCharacter.house.toLowerCase() === searchHouse.toLowerCase()
    // 
    .filter((eachCharacter) => {
      return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase())
    })
    .sort((x, y) => x.name.localeCompare(y.name))

  // ERROR MESSAGE

  const inputMsg = () => {
    if (filteredCharacters.length === 0) {
      setErrorMsg(
        <div className='errorMsg__container'>
          <p className='errorMsg'>El personaje que busca no se encuentra en la lista</p>
          <img src='https://media.tenor.com/qYySZ9y7e2YAAAAC/hermione-granger-wand.gif' alt='Hermione gif' title='Hermione gif' className='errorMsg__img'></img>
        </div>
      )
    } else if (filteredCharacters.length !== 0) {
      setErrorMsg('')
    }
  }
  console.log(filteredCharacters.length);
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
              searchHouseP={searchHouse}
              handleResetSelectLift={handleResetSelect}
              handleResetInputLift={handleResetInput}
              handleResetErrorLift={handleResetError}

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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
    <Footer></Footer>
  </div>;
}

export default App;
