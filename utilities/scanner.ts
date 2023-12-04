export class Scanner {
  static line = "";
  static index = 0;

  static reset(line: string) {
    Scanner.line = line;
    Scanner.index = 0;
  }

  static char() {
    return Scanner.line[Scanner.index];
  }

  static next() {
    Scanner.index++;
  }

  static skipNonDigit() {
    while (Scanner.char() < "0" || Scanner.char() > "9") {
      Scanner.next();
    }
  }

  static skipNonAlpha() {
    while (Scanner.char() < "a" || Scanner.char() > "z") {
      Scanner.next();
    }
  }

  static isEnd() {
    return Scanner.index >= Scanner.line.length;
  }

  static isDigit() {
    return Scanner.char() >= "0" && Scanner.char() <= "9";
  }

  static isAlpha() {
    return Scanner.char() >= "a" && Scanner.char() <= "z";
  }

  static scanNextInteger(): number {
    Scanner.skipNonDigit();

    if (Scanner.isEnd() || !Scanner.isDigit()) {
      return -1;
    }

    const startIndex = Scanner.index;

    while (!Scanner.isEnd() && Scanner.isDigit()) {
      Scanner.next();
    }

    return Number(this.line.slice(startIndex, Scanner.index));
  }

  static scanNextWord(): string {
    Scanner.skipNonAlpha();

    if (Scanner.isEnd() || !Scanner.isAlpha()) {
      return "";
    }

    const startIndex = Scanner.index;

    while (!Scanner.isEnd() && Scanner.isAlpha()) {
      Scanner.next();
    }

    return this.line.slice(startIndex, Scanner.index);
  }
}
