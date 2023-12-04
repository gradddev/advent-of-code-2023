import { Scanner } from "../../utilities/scanner";

export function solve(input: string): number {
  const scanner = new Scanner();

  let sum = 0;

  for (const line of input.split("\n")) {
    scanner.reset(line);

    const gameId = scanner.scanNextInteger();

    let isPossible = true;
    let count = -1;
    while ((count = scanner.scanNextInteger()) !== -1) {
      const color = scanner.scanNextWord();

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
