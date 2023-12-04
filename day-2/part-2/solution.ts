import { Scanner } from "../../utilities/scanner";

export function solve(input: string): number {
  const scanner = new Scanner();

  let sum = 0;

  for (const line of input.split("\n")) {
    scanner.reset(line);

    scanner.scanNextInteger();

    const map: Record<string, number> = { red: 0, green: 0, blue: 0 };

    let count = -1;
    while ((count = scanner.scanNextInteger()) !== -1) {
      const color = scanner.scanNextWord();
      map[color] = Math.max(map[color], count);
    }

    sum += map["red"] * map["green"] * map["blue"];
  }

  return sum;
}
