import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <h2>Bienvenides</h2>
      <Link to="/characters/">
        Ir a personajes
      </Link>
    </>
  )
}
export default Landing;