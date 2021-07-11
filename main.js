const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";
let validInput = 1;
let rowIndex = 0;
let columnIndex = 0;
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
      result += "\n"; // next line
    }
    console.log(result);
  }

  validateInput(row, col) {
    if (
      typeof this.field2D[row] !== "undefined" &&
      typeof this.field2D[row][col] !== "undefined"
    ) {
      if (this.field2D[row][col] === hat) {
        console.log("YOU FOUND THE HAT!!!");
      } else if (this.field2D[row][col] === hole) {
        console.log("You feel into a hole!");
      } else if (
        this.field2D[row][col] === fieldCharacter ||
        this.field2D[row][col] === pathCharacter
      ) {
        this.field2D[row][col] = pathCharacter;
        return 1;
      }
    } else {
      console.log("U went out of bounds");
    }
  }

  // this method update map when you move
  updateFieldArray(row, col) {
    validInput = this.validateInput(row, col);
  }
}

function playGame() {
  const myField = new Field([
    ["*", "░", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
    ["░", "O", "░"],
    ["░", "O", "░"],
  ]);

  while (validInput === 1) {
    // print current field
    myField.print();
    // get user input
    let userInput = prompt("Which direction? : ");
    // process user input
    switch (userInput) {
      case "l":
        columnIndex--;
        break;
      case "r":
        columnIndex++;
        break;
      case "u":
        rowIndex--;
        break;
      case "d":
        rowIndex++;
        break;
    }
    // update field array
    myField.updateFieldArray(rowIndex, columnIndex);
  } // end of loop
}

playGame();
