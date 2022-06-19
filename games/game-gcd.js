import game from '../src/index.js';
import { taskGsd } from '../src/randomFunction.js';

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  const questionAnswer = () => taskGsd();

  game(rule, questionAnswer);
};
