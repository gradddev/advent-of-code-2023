export function solve(input: string): number {
  let sum = 0;
  for (let line of input.split("\n")) {
    let i = 0;
    let j = line.length - 1;

    let firstDigit = "";
    let lastDigit = "";

    while (i <= j) {
      if (!firstDigit.length) {
        if (line[i] >= "0" && line[i] <= "9") {
          firstDigit = line[i];
        } else {
          i++;
        }
      }

      if (!lastDigit.length) {
        if (line[j] >= "0" && line[j] <= "9") {
          lastDigit = line[j];
        } else {
          j--;
        }
      }

      if (firstDigit && lastDigit) {
        break;
      }
    }

    sum += Number(firstDigit + lastDigit);
  }
  return sum;
}
