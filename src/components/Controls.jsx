import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/themeContext';

const Controls = () => {
  const { increaseFont, decreaseFont, alignToLeft, alignToCenter, alignToRight } = useContext(ThemeContext);
  return (
    <ControlsContainer>
      <div>
        <Button onClick={increaseFont}>Increase font</Button>
        <Button onClick={decreaseFont}>Decrease font</Button>
      </div>
      <div>
        <Button onClick={alignToLeft}>Left</Button>
        <Button onClick={alignToCenter}>Center</Button>
        <Button onClick={alignToRight}>Right</Button>
      </div>
    </ControlsContainer>
  )
}

export default Controls;

const ControlsContainer = styled.div`
    margin-top: 20px;
`;
const Button = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;

    &:hover {
        background: #191668;
    }
`;