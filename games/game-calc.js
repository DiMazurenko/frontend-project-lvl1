import game from '../src/index.js';
import { taskCalc } from '../src/randomFunction.js';

export default () => {
  const rule = 'What is the result of the expression?';

  const questionAnswer = () => taskCalc();

  game(rule, questionAnswer);
};
