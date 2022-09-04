import { useContext } from 'react';
import FrenchFlag from '../../assets/france.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import SpanishFlag from '../../assets/spain.svg';
import './ToggleLangs.css'

export default function ToggleLangs() {
  return (
    <div className='container-langs'>
        <img src={FrenchFlag} alt="drapeau de la France"/>
        <img src={EnglishFlag} alt="drapeau de l\'Espagne" />
        <img src={SpanishFlag} alt="drapeau du Royaume Uni"/>
    </div>
  )
}
