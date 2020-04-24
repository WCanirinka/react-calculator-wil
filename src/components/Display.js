import React, { useState } from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const [buttons] = useState([
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ]);

  const [groupIndices] = useState([1, 2, 3, 4]);

  return (
    <div>
      {buttons.map((group, outerIndex) => (
        <div className="btn-group" key={groupIndices[outerIndex]}>
          {group.map(character => (
            <Button key={character} name={character} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
