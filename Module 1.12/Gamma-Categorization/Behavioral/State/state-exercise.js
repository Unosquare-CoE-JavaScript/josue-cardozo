class CombinationLock {
  constructor(combination) {
    this.combination = combination;
    this.reset();
    this.combination = this.combination.map(String).join("");
  }

  reset() {
    this.status = "LOCKED";
    this.digits = [];
    this.failed = false;
  }

  enterDigit(digit) {
    if (this.status === "LOCKED") this.status = "";
    this.status += `${digit}`;

    if (
      this.status[this.status.length - 1] !==
      this.combination[this.status.length - 1]
    ) {
      this.status = "ERROR";
      return 'Incorrect code';
    }

    if (this.status === this.combination) {
      this.status = "OPEN";
      return 'Welcome';
    }
  }
}

let cl = new CombinationLock([1, 2, 3, 4, 5]);
cl.enterDigit(1);
cl.enterDigit(2);
cl.enterDigit(3);
cl.enterDigit(4);
console.log(cl.enterDigit(5));
