import game from '../src/index.js';
import { getTaskGcd } from '../src/randomFunction.js';

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  const questionAnswer = () => getTaskGcd();

  game(rule, questionAnswer);
};
