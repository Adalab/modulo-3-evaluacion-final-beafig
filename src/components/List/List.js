import EachCharacter from './EachCharacter';

import '../../styles/layout/List.scss'


function List({ filteredCharactersP }) {

  const htmlList = filteredCharactersP
    .map(eachCharacter => {
      return <EachCharacter key={eachCharacter.id} eachCharacterP={eachCharacter} />
    })

  const errorMsg = (filteredCharactersP.length === 0) && (
    <div className='errorMsg__container'>
      <p className='errorMsg'>The character you are looking for isn't on the list, please try it in another house or try other name.</p>
      <img src='https://media.tenor.com/qYySZ9y7e2YAAAAC/hermione-granger-wand.gif' alt='Hermione gif' title='Hermione gif' className='errorMsg__img'></img>
    </div>
  )

  return (
    <>
      {errorMsg}
      <ul className='list'>
        {htmlList}
      </ul>
    </>
  )
}
export default List;