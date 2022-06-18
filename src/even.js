import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (
      (randomNumber % 2 === 0 && answer === 'yes')
      || (randomNumber % 2 !== 0 && answer === 'no')
    ) {
      console.log('Correct!');
      i += 1;
    } else if (randomNumber % 2 === 0 && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.
      Let's try again, ${name}`);
    } else if (randomNumber % 2 !== 0 && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.
      Let's try again, ${name}`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
