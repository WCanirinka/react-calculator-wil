import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const [buttons] = useState([
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ]);

  const [groupIndices] = useState([1, 2, 3, 4]);

  const [operationCharacters] = useState(['÷', 'X', '-', '+', '=']);

  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <div className="btn-panel">
      {buttons.map((group, outerIndex) => (
        <div className="btn-group" key={groupIndices[outerIndex]}>
          {group.map(character => {
            if (operationCharacters.includes(character)) {
              return (
                <Button
                  key={character}
                  name={character}
                  clickHandler={handleClick}
                />
              );
            } if (character === '0') {
              return (
                <Button
                  key={character}
                  name={character}
                  color
                  wide
                  clickHandler={handleClick}
                />
              );
            }
            return (
              <Button
                key={character}
                name={character}
                color
                clickHandler={handleClick}
              />
            );
          })}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
