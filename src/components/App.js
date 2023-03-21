/* SECCIÓN DE IMPORT: de React, componentes, SASS, imágenes*/

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../styles/App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import List from './List/List';

/* SECCIÓN DEL COMPONENTE: variables de estado, efectos, funciones handler, funciones y variables para pintar el HTML y el HTML*/
function App() {

  // VARIABLES DE ESTADO
  const [gryffindor, setGryffindor] = useState([])
  const [searchHouse, setSearchHouse] = useState('ravenclaw')

  // EFECTOS
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${searchHouse}`)
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.map(eachCharacter => ({
          actor: eachCharacter.actor,
          alive: eachCharacter.alive,
          ancestry: eachCharacter.ancestry,
          student: eachCharacter.hogwartsStudent,
          staff: eachCharacter.hogwartsStaff,
          house: eachCharacter.house,
          id: eachCharacter.id,
          image: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
          patronus: eachCharacter.patronus
        }))
        console.log(cleanData);
        setGryffindor(cleanData)
      });
  }, [searchHouse])


  // FUNCIONES HANDLER 


  // FUNCIONES Y VARIABLES 


  return <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/characters/' element={<List gryffindorP={gryffindor} />} />
      </Routes>
    </main>
    <Footer></Footer>
  </div>;
}

export default App;
