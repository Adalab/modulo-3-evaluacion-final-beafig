function FilterHouse({ handleSelectHouseLift, searchHouseP }) {

  const handleSelectHouse = (ev) => {
    handleSelectHouseLift(ev.target.value)
  }

  return (
    <label htmlFor="house"> Choose a house: {''}
      <select name="house" id="house"
        onChange={handleSelectHouse}
        value={searchHouseP}>
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
      </select>
    </label>
  )
}
export default FilterHouse;