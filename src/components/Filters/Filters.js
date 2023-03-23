import { Link } from 'react-router-dom';
import FilterHouse from './FilterHouse';
import FilterName from './FilterName';
import Header from '../Header/Header'
import '../../styles/layout/Form.scss'

function Filters({ handleSelectHouseLift, handleInputNameLift, searchNameP, searchHouseP }) {

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  const handleReset = () => {
    handleSelectHouseLift('gryffindor');
    handleInputNameLift('');

  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className='form'>
        <input type="button" value="Reset search" className='form__reset' onClick={handleReset} />
        <Link to='/'>
          <input type="button" value=" Go back" className='form__btn' />
        </Link>
        <FilterHouse handleSelectHouseLift={handleSelectHouseLift}
          searchHouseP={searchHouseP} />
        <FilterName handleInputNameLift={handleInputNameLift}
          searchNameP={searchNameP} />
      </form>
    </>
  )
}
export default Filters;