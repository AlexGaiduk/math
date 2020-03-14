// TODO: write your code here
import Magician from "./classes/magician";
import Daemon from "./classes/daemon";

const char1 = new Magician("Billy");
const char2 = new Daemon("Willy");

console.log(char1);
console.log(char1.attack);

char2.stoned = true;

console.log(char2);
console.log(char2.attack);
console.log(char2.stoned);