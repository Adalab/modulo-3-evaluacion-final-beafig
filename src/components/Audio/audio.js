import { useRef, useState } from 'react';
import introMusic from '../../audio/intro.mp3'

function Audio() {

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
    <>
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
    </>
  )
}
export default Audio;