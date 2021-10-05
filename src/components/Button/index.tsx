import React from 'react';
import { ButtonContainer } from './styles';

type ButtonProps = {
  content: string;
  handleClick?: () => void;
  width?: string;
};

const Button = ({ content, handleClick, width }: ButtonProps) => {
  return (
    <ButtonContainer onClick={handleClick} width={width}>
      {content}
    </ButtonContainer>
  );
};

export default Button;
