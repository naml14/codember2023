import * as fs from 'node:fs/promises';

const file = "./message_02.txt";
const init = 0;

try {
  let steps = [];
  steps = (await fs.readFile(file, { encoding: 'utf8' })).split('');
  console.log(steps);
  let result = init;
  let submit = "";
  for (let i = 0; i < steps.length; i++) {
    switch (steps[i]) {
      case '#':
        result += 1;
        break;

      case '@':
        result -= 1;
        break;

      case '*':
        result *= result;
        break;

      case '&':
        console.log(result);
        submit += result.toString();
        break;

      default:
        break;
    }
  }
  console.log(submit);
} catch (error) {
  console.error(error)
}