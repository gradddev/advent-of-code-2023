import { describe, expect, test } from "bun:test";
import { solve } from "./solution";

describe("Day 1", () => {
  describe("Part 1", () => {
    test("Example", async () => {
      const path = import.meta.resolveSync("./example.txt");
      const input = await Bun.file(path).text();
      const output = solve(input);
      expect(output).toBe(2286);
    });

    test("Input", async () => {
      const path = import.meta.resolveSync("./input.txt");
      const input = await Bun.file(path).text();
      const output = solve(input);
      expect(output).toBe(62241);
    });
  });
});
