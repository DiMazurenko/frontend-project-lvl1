import game from '../src/index.js';
import { getTaskEven } from '../src/randomFunction.js';

export default () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questionAnswer = () => getTaskEven();

  game(rule, questionAnswer);
};
