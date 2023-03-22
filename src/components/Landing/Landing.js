import { Link } from 'react-router-dom';

import introMusic from '../../audio/intro.mp3'
import '../../styles/layout/Landing.scss'

function Landing() {
  return (
    <section className='landing'>
      <Link to="/characters/" >
        <input type="button" value="Ver personajes" className='landing__btn' />
      </Link>
      <audio autoPlay loop>
        <source src={introMusic} type="audio/mp3" />
      </audio>
    </section>
  )
}
export default Landing;