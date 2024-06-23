import React from 'react'

const Button = ({onClick, text, iconLeft, iconRight, bgColor, hoverColor, shouldGrow, whiteText, classNames}) => {
  return (
    <button className={` ${classNames} py-2 px-4 rounded-sm shadow duration-75 flex items-center justify-center gap-4 ${bgColor} ${hoverColor} ${shouldGrow && 'hover:scale-105'} ${whiteText && 'text-white'}`} onClick={onClick}>
        {iconLeft}
        {text}
        {iconRight}
    </button>
  )
}

export default Button