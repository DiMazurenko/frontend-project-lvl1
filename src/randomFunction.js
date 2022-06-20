export const getTaskEven = () => {
  const question = Math.floor(Math.random() * 100);

  let answer = 'no';
  if (question % 2 === 0) {
    answer = 'yes';
  }
  return [question, answer];
};

export const getTaskCalc = () => {
  const numberFirst = Math.floor(Math.random() * 100);
  const numberSecond = Math.floor(Math.random() * 100);

  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * signs.length)];

  const question = `${numberFirst} ${sign} ${numberSecond}`;

  let result = 0;
  switch (sign) {
    case '+':
      result = numberFirst + numberSecond;
      break;
    case '-':
      result = numberFirst - numberSecond;
      break;
    case '*':
      result = numberFirst * numberSecond;
      break;
    default:
      result = null;
  }

  return [question, result.toString()];
};

export const getTaskGcd = () => {
  const numberFirst = Math.floor(Math.random() * 100);
  const numberSecond = Math.floor(Math.random() * 100);
  const maxNumber = Math.max(numberFirst, numberSecond);

  const question = `${numberFirst} ${numberSecond}`;

  let result = 0;
  for (let i = 1; i <= maxNumber; i += 1) {
    if (numberFirst % i === 0 && numberSecond % i === 0) {
      result = i;
    }
  }
  return [question, result.toString()];
};

export const getTaskProgression = () => {
  const randomPlusNumber = Math.floor(Math.random() * 100);
  const firstNumber = Math.floor(Math.random() * 100);

  const numbers = [];
  numbers[0] = firstNumber;
  const numbersCount = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

  for (let i = 1; i < numbersCount; i += 1) {
    numbers[i] = numbers[i - 1] + randomPlusNumber;
  }

  const randomNumberInArr = Math.floor(Math.random() * (numbersCount + 1));
  let answer = numbers[randomNumberInArr];
  answer = answer.toString();

  numbers[randomNumberInArr] = '..';

  const question = numbers.join(' ');

  return [question, answer];
};

export const getTaskPrime = () => {
  const question = Math.floor(Math.random() * 1000);

  let answer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answer = 'no';
    }
  }

  return [question, answer];
};
