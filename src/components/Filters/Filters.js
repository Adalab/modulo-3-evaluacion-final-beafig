import FilterHouse from './FilterHouse';
import FilterName from './FilterName';
import Header from '../Header/Header'

function Filters({ handleSelectHouseLift, handleInputNameLift, searchNameP, searchHouseP }) {

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <FilterHouse handleSelectHouseLift={handleSelectHouseLift}
          searchHouseP={searchHouseP} />
        <FilterName handleInputNameLift={handleInputNameLift}
          searchNameP={searchNameP} />
      </form>
    </>
  )
}
export default Filters;