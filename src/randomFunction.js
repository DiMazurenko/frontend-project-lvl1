export const randomSymbolOperation = () => {
  const arr = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

export const taskCalc = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);

  const arr = ['+', '-', '*'];
  const sign = arr[Math.floor(Math.random() * arr.length)];

  const question = `${number1} ${sign} ${number2}`;

  let result = 0;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = null;
  }

  return [question, result.toString()];
};
