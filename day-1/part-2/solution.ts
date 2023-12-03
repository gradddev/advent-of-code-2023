export function solve(input: string): number {
  let sum = 0;

  for (let line of input.split("\n")) {
    const firstDigit = scan(line, 0, false);
    const lastDigit = scan(line, line.length - 1, true);
    sum += Number(firstDigit + lastDigit);
  }
  return sum;
}

const digitByWord: Record<string, string> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const words = Object.keys(digitByWord);

function scan(line: string, index: number, reverse: boolean): string {
  if (index >= line.length) {
    return "";
  }

  let digit = scanDigit(line, index);

  for (let word of words) {
    digit ||= scanWord(line, index, word, reverse);
  }

  return digit || scan(line, reverse ? index - 1 : index + 1, reverse);
}

function scanDigit(line: string, index: number): string {
  if (line[index] >= "1" && line[index] <= "9") {
    return line[index];
  }
  return "";
}

function scanWord(
  line: string,
  index: number,
  word: string,
  reverse: boolean,
  offset = 0
): string {
  const lineIndex = reverse ? index - offset : index + offset;
  const wordIndex = reverse ? word.length - offset - 1 : offset;

  if (line[lineIndex] === word[wordIndex]) {
    if (offset === word.length - 1) {
      return digitByWord[word];
    }

    return scanWord(line, index, word, reverse, offset + 1);
  }

  return "";
}
