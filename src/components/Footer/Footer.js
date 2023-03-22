import '../../styles/layout/Footer.scss'
import logo from '../../images/harryPotter.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__container">
        <p className='footer__text'>Made it with 💜 by Bea</p>
        <a href="https://github.com/beafig" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github-alt"></i></a>
        <a href="https://www.linkedin.com/in/bea-figueroa/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i></a>
      </div>
      <img src={logo} alt="logo Harry Potter" title='logo Harry Potter' className='footer__logo' />
    </footer>
  )
}
export default Footer;