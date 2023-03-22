import { Link } from 'react-router-dom';
import '../../styles/layout/EachCharacter.scss'

import human from '../../images/capa.png'
import ghost from '../../images/fantasma.png'
import wolf from '../../images/wolf.png'
import gigant from '../../images/gigante.png'

function EachCharacter({ eachCharacterP }) {

  const speciesIcon = () => {
    if (eachCharacterP.species === 'human') {
      return <img className='eachCharacter__specie' src={human} alt='Human icon' title='Human icon' />
    } else if (eachCharacterP.species === 'ghost') {
      return <img className='eachCharacter__specie' src={ghost} alt='Human icon' title='Human icon' />
    } else if (eachCharacterP.species === 'werewolf') {
      return <img className='eachCharacter__specie' src={wolf} alt='Wolf icon' title='Wolf icon' />
    } else if (eachCharacterP.species === 'half-giant') {
      return <img className='eachCharacter__specie' src={gigant} alt='Gigant icon' title='Gigant icon' />
    }
  };

  return (
    <Link to={'/character/' + eachCharacterP.id} className='eachCharacter__link'>
      <h3 className='eachCharacter__title'>{eachCharacterP.name}</h3>
      <li className='eachCharacter'>
        <div>
          <img src={eachCharacterP.image ? eachCharacterP.image : "https://i.pinimg.com/originals/12/2b/a4/122ba43437eb04cace7fd5cff3909545.gif"} alt={"Foto de " + eachCharacterP.name} title={"Foto de " + eachCharacterP.name}
            className='eachCharacter__img' />
        </div>
        <div>
          <div className='eachCharacter__container--specie'>
            {speciesIcon()}
            <p className='eachCharacter__text'> {eachCharacterP.species ? eachCharacterP.species[0].toUpperCase() + eachCharacterP.species.substring(1) : 'Unknown'}</p>
          </div>
          <p className='eachCharacter__text'>  Ancestry: {eachCharacterP.ancestry ? eachCharacterP.ancestry[0].toUpperCase() + eachCharacterP.ancestry.substring(1) : 'Unknown'}</p>
        </div>
      </li>
    </Link >
  )
}
export default EachCharacter;