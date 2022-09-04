import { createContext, useState } from "react";

export const Context = createContext();

const supportedLangs = ['EN', 'FR', 'ES'];

let browserLang = navigator.language.slice(0,2).toUpperCase();

if(!supportedLangs.includes(browserLang)){
    console.log('Language not supported')
    browserLang = 'EN'
}

const ContextProvider = (props) => {

    const [lang, setLang] = useState(browserLang)

    const toggleLang = function(changeLang){
        setLang(changeLang)
    }

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;

