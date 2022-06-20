import game from '../src/index.js';
import { getTaskProgression } from '../src/randomFunction.js';

export default () => {
  const rule = 'What number is missing in the progression?';

  const questionAnswer = () => getTaskProgression();

  game(rule, questionAnswer);
};
