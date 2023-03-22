import '../../styles/layout/Footer.scss'
import logo from '../../images/harryPotter.png'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Mi pagina</p>
      <img src={logo} alt="logo Harry Potter" title='logo Harry Potter' className='footer__logo' />
    </footer>
  )
}
export default Footer;