import '../../styles/layout/FilterHouse.scss'

function FilterHouse({ handleSelectHouseLift, searchHouseP }) {

  const handleSelectHouse = (ev) => {
    handleSelectHouseLift(ev.target.value)
  }

  return (
    <label htmlFor="house" className='houseLabel'> Choose a house: {''}
      <select name="house" id="house"
        onChange={handleSelectHouse}
        value={searchHouseP} className='houseSelect'>
        <option className='houseOption' value="gryffindor">Gryffindor</option>
        <option className='houseOption' value="hufflepuff">Hufflepuff</option>
        <option className='houseOption' value="ravenclaw">Ravenclaw</option>
        <option className='houseOption' value="slytherin">Slytherin</option>
      </select>
    </label>
  )
}
export default FilterHouse;