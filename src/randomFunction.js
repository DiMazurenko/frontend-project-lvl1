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

export const taskGsd = () => {
  const numberOne = Math.floor(Math.random() * 100);
  const numberTwo = Math.floor(Math.random() * 100);
  const maxNumber = Math.max(numberOne, numberTwo);

  const question = `${numberOne} ${numberTwo}`;

  let result = 0;
  for (let i = 1; i <= maxNumber; i += 1) {
    if (numberOne % i === 0 && numberTwo % i === 0) {
      result = i;
    }
  }
  return [question, result.toString()];
};

export const taskProgression = () => {
  const randomPlusNumber = Math.floor(Math.random() * 100);
  const firstNumber = Math.floor(Math.random() * 100);

  const numbers = [];
  numbers[0] = firstNumber;
  for (let i = 1; i < 10; i += 1) {
    numbers[i] = numbers[i - 1] + randomPlusNumber;
  }
  const randomNumberInArr = Math.floor(Math.random() * 10);
  const answer = numbers[randomNumberInArr].toString();
  numbers[randomNumberInArr] = '..';

  const question = numbers;

  return [question, answer];
};
