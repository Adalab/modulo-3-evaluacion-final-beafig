import { Link } from 'react-router-dom';
import '../../styles/layout/Landing.scss'
import Audio from '../Audio/audio';

function Landing() {

  return (
    <section className='landing'>
      <Link to="/characters/" >
        <input type="button" value="Go to characters" className='landing__btn' />
      </Link>
      <Audio />
    </section>
  )
}
export default Landing;