import { readFile } from 'node:fs/promises';

const file = "./encryption_policies.txt";

function countCharacters(str, char) {
  return str.split(char).length - 1;
}

try {
  const content = await readFile(file, { encoding: 'utf8' });
  const lines = {};

  let count = 0;

  content.split('\n').forEach((line) => {
    const [policy, password] = line.split(':').map(str => str.trim());
    const [range, char] = policy.split(' ');
    const [min, max] = range.split('-').map(Number);

    const charCount = countCharacters(password, char);

    if (charCount < min || charCount > max) {
      if (count === 12 || count === 41) {
        lines[count] = password;
      }
      count++;
    }
  });

  console.log(lines);
} catch (error) {
  console.error(error);
}