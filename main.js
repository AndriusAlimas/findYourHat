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
      result += "\n"; // next line
    }
    console.log(result);
  }

  // this method update map when you move
  updateFieldArray(row, col) {
    try {
      this.field2D[row][col] = "*"; // this will be rendered your position (player)
    } catch (e) {
      // other exception catch like array out of bound exception
      console.log("sorry, u can't move to this place its wall!");
    }
  }
}

function playGame() {
  // user starting position
  let rowIndex = 0;
  let columnIndex = 0;

  // print current field
  const myField = new Field([
    ["*", "░", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
  ]);
  myField.print();
  // get user input
  let userInput = prompt("Which direction? : ");

  // add or subtract columnIndex if user input is l(left) or r(right)
  columnIndex = userInput === "r" ? columnIndex++ : columnIndex--;
  // add or subtract rowIndex if user input is u(up) or d(down)
  rowIndex = userInput === "d" ? rowIndex++ : rowIndex--;

  // update field array

  // print out current field array
}

playGame();
