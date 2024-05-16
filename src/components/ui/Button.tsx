import React from 'react';
import { StyledButton } from './styled/StyledButton';

type ButtonProps = {

    size:"medium",
    variation:"primary",
    text:string,
    onClick?:() => void,
}

const Button:React.FC<ButtonProps> = ({size,variation,onClick,text}) => {
  return (
    <StyledButton size={size} variation={variation} onClick={onClick}>{text}</StyledButton>
  )
}

export default Button