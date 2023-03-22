import { Link } from 'react-router-dom';
import introMusic from '../../audio/intro.mp3'

import '../../styles/layout/Landing.scss'

function Landing() {
  return (
    <section className='landing'>
      <Link to="/characters/" >
        <input type="button" value="Go to characters" className='landing__btn' />
      </Link>
      <audio
        className='landing__audio'
        src={introMusic}
        autoPlay
        loop
      />
    </section>
  )
}
export default Landing;