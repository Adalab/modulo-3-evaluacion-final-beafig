import { Link } from 'react-router-dom';

import Header from '../Header/Header';


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

function CharacterDetail({ findCharacterP }) {

  const speciesIcon = () => {
    if (findCharacterP.species === 'human') {
      return <img src={human} alt='Human icon' title='Human icon' />
    } else if (findCharacterP.species === 'ghost') {
      return <img src={ghost} alt='Human icon' title='Human icon' />
    } else if (findCharacterP.species === 'werewolf') {
      return <img src={wolf} alt='Wolf icon' title='Wolf icon' />
    } else if (findCharacterP.species === 'half-giant') {
      return <img src={gigant} alt='Gigant icon' title='Gigant icon' />
    }
  };

  const house = () => {
    if (findCharacterP.house === 'Gryffindor') {
      return <img src="https://i.pinimg.com/originals/93/85/bf/9385bf3ca546d3c750363a78a68e0c70.jpg" alt="Gryffindor shield" title="Gryffindor shield" />
    } else if (findCharacterP.house === 'Slytherin') {
      return <img src="https://i.pinimg.com/originals/a2/41/cc/a241cc277efae151e264b285a7f123ac.jpg" alt="Slytherin shield" title="Slytherin shield" />
    } else if (findCharacterP.house === 'Hufflepuff') {
      return <img src="https://i.pinimg.com/474x/01/ed/5d/01ed5de92526edafdeaba7afe983d1a8.jpg" alt="Hufflepuff shield" title="Hufflepuff shield" />
    } else if (findCharacterP.house === 'Ravenclaw') {
      return <img src="https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-ravenclaw-harry-potter-61cm_12420_1.jpg" alt="Ravenclaw shield" title="Ravenclaw shield" />
    }
  }
  const gender = () => {
    if (findCharacterP.gender === 'male') {
      return <img src={male} alt="Male symbol" title="Male symbol" />
    } else if (findCharacterP === 'female') {
      return <img src={female} alt="Female symbol" title="Female symbol" />
    }
  }


  return (
    <>
      <Header />
      <section>
        <Link to="/characters/"> Volver</Link>
        <h3>{findCharacterP.name}</h3>
        <img
          src={findCharacterP.alive ? alive : dead} alt="Icon alive or dead"
          title="Icon alive or dead" />
        <h4>{findCharacterP.house}</h4>
        {house()}
        <img
          src={findCharacterP.image ? findCharacterP.image : "https://media4.giphy.com/media/6jemHpKLDe27C/200w.gif?cid=6c09b952p80wcwt2bp9on4aak96m9ws1mbqebco6vhqx416e&rid=200w.gif&ct=g"}
          alt={"Foto de " + findCharacterP.name}
          title={"Foto de " + findCharacterP.name} />

        <p>Actress/actor: {findCharacterP.actor}</p>
        <div>
          <p> Specie: {findCharacterP.species ? findCharacterP.species[0].toUpperCase() + findCharacterP.species.substring(1) : 'Unknown'}
          </p>
          {speciesIcon()}
        </div>
        {gender()}
        <img src={findCharacterP.student ? student : noStudent} alt="Student logo" title="Student logo" />
        <p> Ancestry: {findCharacterP.ancestry ? findCharacterP.ancestry[0].toUpperCase() + findCharacterP.ancestry.substring(1) : 'Unknown'}</p>
      </section>
    </>
  )
}
export default CharacterDetail;