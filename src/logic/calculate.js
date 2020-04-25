
/* eslint-disable no-restricted-globals */
import operate from './operate';

const calculate = (calculator, buttonName) => {
  const operations = ['+', '-', 'X', '÷'];

  let { total, next, operation } = calculator;

  if (buttonName === '+/-') {
    if (next) {
      next = (+next * -1).toString();
    }
    if (total && total !== 'NaN' && !next) {
      total = (+total * -1).toString();
    }
      next = (+next * -1);
    }
    total = (+total 
  }

  if (buttonName === '%') {
    if (next) {
      next = operate(null, next, buttonName);
    } else if (!isNaN(total)) {
      total = operate(null, next, buttonName);
      next *= 0.01;
    } else {
      total *= 0.01;
    }
  }

  if (buttonName === '=') {
    if (total === 'NaN' && next && operation) {
      return { total: 'NaN', next: null, operation: null };
    }
    if (next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  if (operations.includes(buttonName)) {
    if (total === 'NaN' && next && operation) {
      return { total: 'NaN', next: null, operation: buttonName };
    }

    if (total && next && operation) {
      total = operate(total, next, buttonName);
      next = null;
    }

    operation = buttonName;
  }

  if (buttonName === '.') {
    if (next && !next.toString().contains('.')) {
      next = `${next.toString()}.`;
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  return { total, next, operation };
};

export default calculate;
