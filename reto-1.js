import * as fs from 'node:fs/promises';

const file = "./message_01.txt";

let words = {};

try {
  const content = await fs.readFile(file, { encoding: 'utf8' })
  console.log(content)
  content.toLowerCase().split(' ').forEach((word) => { words[word] = (words[word] || 0) + 1; })
  console.log(words);
} catch (error) {
  console.error(error)
}