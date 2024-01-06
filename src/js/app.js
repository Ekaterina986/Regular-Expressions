// TODO: write your code here
import sum from './basic';
import Validator from './validate';

console.log('worked11');

console.log(sum([1, 2]));

const val = new Validator();

console.log(1, val.validateUsername('ttt'));
console.log(2, val.validateUsername('***'));

console.log(val.validateUsername('1eeee'));
console.log(val.validateUsername('eee1'));
console.log(val.validateUsername('_eee'));
console.log(val.validateUsername('eee-'));
console.log(val.validateUsername('22222'));
console.log(val.validateUsername('e222e'));

