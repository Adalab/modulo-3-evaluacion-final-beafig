import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import introMusic from '../../audio/intro.mp3'

import '../../styles/layout/Landing.scss'

function Landing() {

  const [isMuted, setIsMuted] = useState(false)
  const audio = useRef()

  const handleMuteOff = () => {
    audio.current.muted = true
    setIsMuted(true)
  }
  const handleMuteOn = () => {
    audio.current.muted = false
    setIsMuted(false)
  }


  return (
    <section className='landing'>
      <Link to="/characters/" >
        <input type="button" value="Go to characters" className='landing__btn' />
      </Link>


      <i
        className={isMuted ? 'hidden' : 'fa-sharp fa-solid fa-volume-xmark'}
        onClick={handleMuteOff}
      > </i>
      <i
        className={!isMuted ? 'hidden' : 'fa-solid fa-volume-high'}
        onClick={handleMuteOn}></i>
      <audio id='landing__audio'
        ref={audio}
        className='landing__audio'
        autoPlay
        loop
        preload='auto'>
        <source
          type='audio/mp3'
          src={introMusic}
        />
        Your browser does not support the audio element
      </audio>
    </section>
  )
}
export default Landing;