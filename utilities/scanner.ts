interface Options {
  isBackwards?: boolean;
}

export class Scanner {
  #line = "";
  #index = 0;
  #isBackwards = false;

  constructor(options: Options = {}) {
    this.#isBackwards = options.isBackwards ?? false;
  }

  get line(): string {
    return this.#line;
  }

  get index(): number {
    return this.#index;
  }

  reset(line: string, index = this.#isBackwards ? line.length - 1 : 0) {
    this.#line = line;
    this.#index = index;
  }

  char() {
    return this.#line[this.#index];
  }

  next() {
    this.#index += this.#isBackwards ? -1 : 1;
  }

  skipNonDigit() {
    while (this.char() < "0" || this.char() > "9") {
      this.next();
    }
  }

  skipNonAlpha() {
    while (this.char() < "a" || this.char() > "z") {
      this.next();
    }
  }

  isFinished() {
    return this.#isBackwards
      ? this.#index < 0
      : this.#index >= this.#line.length;
  }

  isDigit() {
    return this.char() >= "0" && this.char() <= "9";
  }

  isAlpha() {
    return this.char() >= "a" && this.char() <= "z";
  }

  scanNextDigit(): number {
    this.skipNonDigit();

    if (this.isFinished() || !this.isDigit()) {
      return -1;
    }

    return Number(this.#line[this.index]);
  }

  scanNextInteger(): number {
    this.skipNonDigit();

    if (this.isFinished() || !this.isDigit()) {
      return -1;
    }

    const startIndex = this.#index;

    while (!this.isFinished() && this.isDigit()) {
      this.next();
    }

    return Number(this.#line.slice(startIndex, this.#index));
  }

  scanNextWord(): string {
    this.skipNonAlpha();

    if (this.isFinished() || !this.isAlpha()) {
      return "";
    }

    const startIndex = this.#index;

    while (!this.isFinished() && this.isAlpha()) {
      this.next();
    }

    return this.#line.slice(startIndex, this.#index);
  }
}
