import { isNumber, isString } from './utils';

export default function(prop) {
  return function(firstEl, secondEl) {
    const a = firstEl[prop];
    const b = secondEl[prop];
    if(isNumber(a) && isNumber(b) ) {
      return a - b;
    }
    if(isString(a) && isString(b) ) {
      return a.localeCompare(b);
    }
    return 0;
  }
}
