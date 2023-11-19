import * as fs from 'node:fs/promises';

const file = "./message_01.txt";

try {
  let words = {};
  (await fs.readFile(file, { encoding: 'utf8' })).replace("\n", '').toLowerCase().split(' ').forEach((word) => { words[word] = (words[word] || 0) + 1; })
  console.log(words);
  let result = "";
  let arr1 = Object.keys(words);
  let arr2 = Object.values(words);
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i] + arr2[i];
  }
  console.log(result);
} catch (error) {
  console.error(error)
}