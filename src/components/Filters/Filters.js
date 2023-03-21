import FilterHouse from './FilterHouse';
import FilterName from './FilterName';

function Filters({ handleSelectHouseLift, handleInputNameLift, searchNameP }) {

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <FilterHouse handleSelectHouseLift={handleSelectHouseLift} />
      <FilterName handleInputNameLift={handleInputNameLift}
        searchNameP={searchNameP} />
    </form>
  )
}
export default Filters;