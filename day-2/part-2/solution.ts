import { Scanner } from "../../utilities/scanner";

export function solve(input: string): number {
  let sum = 0;

  for (const line of input.split("\n")) {
    Scanner.reset(line);

    Scanner.scanNextInteger();

    const map: Record<string, number> = { red: 0, green: 0, blue: 0 };

    let count = -1;
    while ((count = Scanner.scanNextInteger()) !== -1) {
      const color = Scanner.scanNextWord();
      map[color] = Math.max(map[color], count);
    }

    sum += map["red"] * map["green"] * map["blue"];
  }

  return sum;
}
