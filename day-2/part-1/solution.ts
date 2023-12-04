import { Scanner } from "../../utilities/scanner";

export function solve(input: string): number {
  let sum = 0;

  for (const line of input.split("\n")) {
    Scanner.reset(line);

    const gameId = Scanner.scanNextInteger();

    let isPossible = true;
    let count = -1;
    while ((count = Scanner.scanNextInteger()) !== -1) {
      const color = Scanner.scanNextWord();

      if (
        (color === "red" && count > 12) ||
        (color === "green" && count > 13) ||
        (color === "blue" && count > 14)
      ) {
        isPossible = false;
        break;
      }
    }

    if (isPossible) sum += gameId;
  }

  return sum;
}
