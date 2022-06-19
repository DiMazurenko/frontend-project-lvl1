import game from '../src/index.js';
import { taskPrime } from '../src/randomFunction.js';

export default () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionAnswer = () => taskPrime();

  game(rule, questionAnswer);
};
