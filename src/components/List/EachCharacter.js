import { Link } from 'react-router-dom';

function EachCharacter({ eachCharacterP }) {

  return (
    <Link to={'/character/' + eachCharacterP.id}>
      <li>
        <h3>{eachCharacterP.name}</h3>
        <img src={eachCharacterP.image ? eachCharacterP.image : "https://media4.giphy.com/media/6jemHpKLDe27C/200w.gif?cid=6c09b952p80wcwt2bp9on4aak96m9ws1mbqebco6vhqx416e&rid=200w.gif&ct=g"} alt={"Foto de " + eachCharacterP.name} title={"Foto de " + eachCharacterP.name} />
        <p> Specie: {eachCharacterP.species ? eachCharacterP.species[0].toUpperCase() + eachCharacterP.species.substring(1) : 'Unknown'}</p>
        <p> Ancestry: {eachCharacterP.ancestry ? eachCharacterP.ancestry[0].toUpperCase() + eachCharacterP.ancestry.substring(1) : 'Unknown'}</p>
      </li>
    </Link >
  )
}
export default EachCharacter;