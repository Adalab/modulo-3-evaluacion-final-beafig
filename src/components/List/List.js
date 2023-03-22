import EachCharacter from './EachCharacter';

import '../../styles/layout/List.scss'


function List({ filteredCharactersP, errorMsgP }) {

  const htmlList = filteredCharactersP
    .map(eachCharacter => {
      return <EachCharacter key={eachCharacter.id} eachCharacterP={eachCharacter} />
    })

  return (
    <>
      {errorMsgP}
      <ul className='list'>
        {htmlList}
      </ul>
    </>
  )
}
export default List;