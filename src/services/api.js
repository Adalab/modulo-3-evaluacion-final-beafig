const callToApi = (house) => {
  // Llamamos a la API
  return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map(eachCharacter => ({
        actor: eachCharacter.actor,
        alive: eachCharacter.alive,
        ancestry: eachCharacter.ancestry,
        student: eachCharacter.hogwartsStudent,
        house: eachCharacter.house,
        id: eachCharacter.id,
        image: eachCharacter.image,
        name: eachCharacter.name,
        species: eachCharacter.species,
        nicknames: eachCharacter.alternate_names,
        gender: eachCharacter.gender
      }))
      return cleanData
    });
}
export default callToApi;