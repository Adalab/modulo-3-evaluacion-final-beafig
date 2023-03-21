function EachCharacter({ eachCharacterP }) {

  // console.log(eachCharacterP);
  return (
    <li>
      <h3>{eachCharacterP.name}</h3>
      <img src={eachCharacterP.image ? eachCharacterP.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/HP_-_Harry_Potter_wordmark.svg/935px-HP_-_Harry_Potter_wordmark.svg.png"} alt={"Foto de " + eachCharacterP.name} title={"Foto de " + eachCharacterP.name} />
      <p> Specie: {eachCharacterP.species ? eachCharacterP.species[0].toUpperCase() + eachCharacterP.species.substring(1) : 'Unknown'}</p>
      <p> Ancestry: {eachCharacterP.ancestry ? eachCharacterP.ancestry[0].toUpperCase() + eachCharacterP.ancestry.substring(1) : 'Unknown'}</p>
    </li>
  )
}
export default EachCharacter;