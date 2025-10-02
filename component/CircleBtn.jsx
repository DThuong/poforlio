import React from 'react'

const CircleBtn = ({children,href,bgColor = "black",color = "black",onClick, isSelected}) => {
    const Style = {
        backgroundColor: bgColor,
        color: color
    };
  return (
    <li style={Style} onClick={(e) => {e.preventDefault(); if(onClick) onClick(e)}} className={isSelected ? "active" : undefined}><a href={href} style={Style} 
    >
        {children}</a></li>
  )
}

export default CircleBtn