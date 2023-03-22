import '../../styles/layout/FilterName.scss'

function FilterName({ handleInputNameLift, searchNameP }) {

  const handleInputName = (ev) => {
    handleInputNameLift(ev.target.value)
  }

  return (
    <>
      <label htmlFor="name" className='nameLabel'>
        Search a character: {''}
        <input
          type="text"
          placeholder='Ex: Dumbledore'
          value={searchNameP}
          onInput={handleInputName}
          className='nameInput'
        />
      </label>
    </>
  )
}
export default FilterName;