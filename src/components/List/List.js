import EachCharacter from './EachCharacter';

function List({ gryffindorP }) {

  const htmlList = gryffindorP
    .map(eachCharacter => {
      return <EachCharacter key={eachCharacter.id} eachCharacterP={eachCharacter} />
    })

  return (
    <ul>
      {htmlList}
    </ul>
  )
}
export default List;