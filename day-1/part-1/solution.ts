import { Scanner } from "../../utilities/scanner";

export function solve(input: string): number {
  let sum = 0;
  const forwardScanner = new Scanner();
  const backwardScanner = new Scanner({ isBackwards: true });

  for (let line of input.split("\n")) {
    forwardScanner.reset(line);
    backwardScanner.reset(line);

    forwardScanner.scanNextDigit();
    backwardScanner.scanNextDigit();

    sum += Number(forwardScanner.char() + backwardScanner.char());
  }

  return sum;
}
