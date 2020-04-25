import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  const a = new Big(numberOne);
  const b = new Big(numberTwo);

  if (operation === '-') {
    return a.minus(b);
  }

  if (operation === '+') {
    return a.plus(b);
  }

  if (operation === 'x') {
    return a.mul(b);
  }

  if (operation === '%') {
    return ((a.mul(b)) / 100);
  }
  return a.div(b);
};

export default operate;
