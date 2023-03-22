import { Link } from 'react-router-dom';
import EachCharacter from './EachCharacter';


function List({ filteredCharactersP, errorMsgP }) {

  const htmlList = filteredCharactersP
    .map(eachCharacter => {
      return <EachCharacter key={eachCharacter.id} eachCharacterP={eachCharacter} />
    })

  return (
    <>
      <Link to='/'> Volver</Link>
      <ul>
        {htmlList}
        {errorMsgP}
      </ul>
    </>
  )
}
export default List;