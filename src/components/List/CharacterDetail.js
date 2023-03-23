import { Link } from 'react-router-dom';
import NotFound from './NotFound';

import '../../styles/layout/CharacterDetail.scss'

import human from '../../images/capa.png'
import ghost from '../../images/fantasma.png'
import wolf from '../../images/wolf.png'
import gigant from '../../images/gigante.png'
import alive from '../../images/salud.png'
import dead from '../../images/muerte.png'
import student from '../../images/gorra.png'
import noStudent from '../../images/sin-educacion.png'
import male from '../../images/macho.png'
import female from '../../images/hembra.png'
import gryff from '../../images/gryff.png'
import huff from '../../images/huff.png'
import raven from '../../images/raven.png'
import slyt from '../../images/slyt.png'

function CharacterDetail({ findCharacterP }) {

  const speciesIcon = () => {
    if (findCharacterP.species === 'human') {
      return <img src={human} alt='Human icon' title='Human icon' className="container__data--logo" />
    } else if (findCharacterP.species === 'ghost') {
      return <img src={ghost} alt='Human icon' title='Human icon' className="container__data--logo" />
    } else if (findCharacterP.species === 'werewolf') {
      return <img src={wolf} alt='Wolf icon' title='Wolf icon' className="container__data--logo" />
    } else if (findCharacterP.species === 'half-giant') {
      return <img src={gigant} alt='Gigant icon' title='Gigant icon' className="container__data--logo" />
    }
  };

  const house = () => {
    if (findCharacterP.house === 'Gryffindor') {
      return <img className="detail__house" src={gryff} alt="Gryffindor shield" title="Gryffindor shield" />
    } else if (findCharacterP.house === 'Slytherin') {
      return <img className="detail__house" src={slyt} alt="Slytherin shield" title="Slytherin shield" />
    } else if (findCharacterP.house === 'Hufflepuff') {
      return <img className="detail__house" src={huff} alt="Hufflepuff shield" title="Hufflepuff shield" />
    } else if (findCharacterP.house === 'Ravenclaw') {
      return <img className="detail__house" src={raven} alt="Ravenclaw shield" title="Ravenclaw shield" />
    }
  }
  const gender = () => {
    if (findCharacterP.gender === 'male') {
      return <img className="container__desc--gender" src={male} alt="Male symbol" title="Male symbol" />
    } else if (findCharacterP.gender === 'female') {
      return <img className="container__desc--gender" src={female} alt="Female symbol" title="Female symbol" />
    }
  }

  console.log(findCharacterP);

  if (findCharacterP !== undefined) {
    return (
      <>
        <section className='detail'>
          <Link to="/characters/">
            <input type="button" value="Go back" className='detail__btn' />
          </Link>
          <div className='detail__container'>
            <div className='container__name'>
              <h3 className='container__name--text'>{findCharacterP.name}</h3>
              <img
                className='container__name--icon'
                src={findCharacterP.alive ? alive : dead} alt="Icon alive or dead"
                title="Icon alive or dead" />
            </div>
            <p
              className={findCharacterP.nicknames.length === 0 ? 'hidden' : 'detail__nickname'}
            >
              - {findCharacterP.nicknames[0]} -</p>
            <p
              className={findCharacterP.nicknames.length <= 1 ? 'hidden' : 'detail__nickname'}
            >
              - {findCharacterP.nicknames[1]} -</p>
            <div className="detail__desc">
              <div className="detail__desc--box">
                <img
                  className="detail__desc--img"
                  src={findCharacterP.image ? findCharacterP.image : "https://media4.giphy.com/media/6jemHpKLDe27C/200w.gif?cid=6c09b952p80wcwt2bp9on4aak96m9ws1mbqebco6vhqx416e&rid=200w.gif&ct=g"}
                  alt={"Foto de " + findCharacterP.name}
                  title={"Foto de " + findCharacterP.name} />
                {house()}
              </div>
              <div className="container__desc">
                <div className="container__data">
                  <p>{findCharacterP.species ? findCharacterP.species[0].toUpperCase() + findCharacterP.species.substring(1) : 'Unknown'}
                  </p>
                  {speciesIcon()}
                </div>
                <div className="container__data">
                  <p>Currently student : {''}</p>
                  <img src={findCharacterP.student ? student : noStudent} alt="Student logo" title="Student logo" className="container__data--logo" />
                </div>
                <p className="container__desc--act"> Ancestry: {findCharacterP.ancestry ? findCharacterP.ancestry[0].toUpperCase() + findCharacterP.ancestry.substring(1) : 'Unknown'}</p>
                <p className="container__desc--act">Actress/actor: {findCharacterP.actor ? findCharacterP.actor : 'Unknown'}</p>
                {gender()}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  } else {
    return <NotFound />
  }
}
export default CharacterDetail;