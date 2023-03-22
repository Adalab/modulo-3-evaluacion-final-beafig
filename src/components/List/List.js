import EachCharacter from './EachCharacter';

import '../../styles/layout/List.scss'


function List({ filteredCharactersP, errorMsgP }) {

  const htmlList = filteredCharactersP
    .map(eachCharacter => {
      return <EachCharacter key={eachCharacter.id} eachCharacterP={eachCharacter} />
    })

  return (
    <>
      <ul className='list'>
        {htmlList}
        {errorMsgP}
      </ul>
    </>
  )
}
export default List;