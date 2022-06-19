import readlineSync from 'readline-sync';

export default (rule, questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  let i = 0;
  while (i < 3) {
    const pairquestionAnswer = questionAnswer();
    console.log(`Question: ${pairquestionAnswer[0]}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (gamerAnswer === pairquestionAnswer[1]) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${pairquestionAnswer[1]}'.
      Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
