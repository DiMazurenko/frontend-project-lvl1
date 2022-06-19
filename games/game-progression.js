import game from '../src/index.js';
import { taskProgression } from '../src/randomFunction.js';

export default () => {
  const rule = 'What number is missing in the progression?';

  const questionAnswer = () => taskProgression();

  game(rule, questionAnswer);
};
