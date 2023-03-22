import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import '../../styles/layout/NotFound.scss'

function NotFound() {
  return (
    <>
      <Header />
      <section className="notFound">
        <Link to="/characters/">
          <input type="button" value="Go to characters" className='notFound__btn' />
        </Link>
        <h2 className="notFound__text">The page you are trying to visit doesn't exist yet.</h2>
        <img src="http://img.qdaily.com/uploads/20180628182235eiRXashVlcWnz1q3.gif-WebpWebW640" alt="gif Dumbledore" title="gif Dumbledore" className="notFound__img" />
      </section>
    </>
  )
}
export default NotFound;