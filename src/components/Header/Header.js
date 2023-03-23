import '../../styles/layout/Header.scss'
import Audio from '../Audio/audio';

function Header() {
  return (
    <header className='header'>
      <div className="header__container">
        <Audio />
      </div>

      <h1 className='header__title'>Harry Potter</h1>
    </header>
  )
}
export default Header;