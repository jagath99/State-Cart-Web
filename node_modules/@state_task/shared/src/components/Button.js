import React from 'react'

export const Button=({children,onClick,style}) =>(
    <button onClick={onClick} style={style}>{children}</button>
);
