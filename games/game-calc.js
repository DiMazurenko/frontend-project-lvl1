import game from '../src/index.js';
import { getTaskCalc } from '../src/randomFunction.js';

export default () => {
  const rule = 'What is the result of the expression?';

  const questionAnswer = () => getTaskCalc();

  game(rule, questionAnswer);
};
