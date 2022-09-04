import { useContext } from 'react';
import FrenchFlag from '../../assets/france.svg';
import EnglishFlag from '../../assets/united-kingdom.svg';
import SpanishFlag from '../../assets/spain.svg';
import './ToggleLangs.css'
import { Context } from '../../context/langContext';

export default function ToggleLangs() {

    const {toggleLang}  = useContext(Context)

    return (
        <div className='container-langs'>
            <img  onClick={() => toggleLang('FR')} src={FrenchFlag} alt="drapeau de la France"/>
            <img  onClick={() => toggleLang('EN')} src={EnglishFlag} alt="drapeau de l\'Espagne" />
            <img  onClick={() => toggleLang('ES')} src={SpanishFlag} alt="drapeau du Royaume Uni"/>
        </div>
  )
}
