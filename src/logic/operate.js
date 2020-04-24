import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);

  if (operation === '-') {
    return x.minus(y);
  }

  if (operation === '+') {
    return x.plus(y);
  }

  if (operation === 'x') {
    return x.mul(y);
  }

  return x.div(y);
};

export default operate;
