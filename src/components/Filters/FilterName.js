function FilterName({ handleInputNameLift, searchNameP }) {

  const handleInputName = (ev) => {
    handleInputNameLift(ev.target.value)
  }

  return (
    <label htmlFor="name">
      Search a character {''}
      <input
        type="text"
        placeholder='Ex: Dumbledore'
        value={searchNameP}
        onInput={handleInputName}
      />
    </label>
  )
}
export default FilterName;