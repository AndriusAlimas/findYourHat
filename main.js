const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  // constructor
  constructor(field2D) {
    this.field2D = field2D;
  }

  // print out a string representation of the board
  print() {
    let result = "";
    for (let i = 0; i < this.field2D.length; i++) {
      result += this.field2D[i].join(" ");
      result += "\n";
    }
    console.log(result);
  }
}

const myField = new Field([
  ["*", "░", "O"],
  ["░", "O", "░"],
  ["░", "^", "░"],
]);
myField.print();
