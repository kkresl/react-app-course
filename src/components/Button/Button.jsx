import {} from 'react';
import cls from "./Button.module.css"

const inlineStyles = {
    color:'lightsalmon',
    backgroundColor: "#27be4d"
}

const isPrimary = true;

export const Button = ({onClick, text}) => {
   
    console.log(onClick, text);
    
    return (
        //<button className = {isPrimary ? cls.primary : cls.btn} > Кнопка </button>

        <button className = {`${cls.btn} ${isPrimary ? cls.primary : ""}`} 
        onClick={onClick} >
        Button {text} </button>
    );
};