let LivingCreature = require("/.LivingCreature")


module.exports = class Rus extends LivingCreature {
    constructor(x, y) {
      super(x,y)
   
        this.energy = 10


        this.directions = [
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 3, this.y],

        ];
    }
    chooseCell(char, char1) {
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }


    eat() {
        var emptyCells = this.chooseCell(2, 3)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];


        if (newCell) {

            var newX = newCell[0]
            var newY = newCell[1]

            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 4
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }
        }

    }
    move() {
        this.energy--
        var emptyCells = this.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];


        if (newCell && this.energy >= 0) {
            console.log(newCell)
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in RusArr) {
            if (this.x == RusArr[i].x && this.y == RusArr[i].y) {
                RusArr.splice(i, 1);
                break;
            }
        }
    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];


        console.log(emptyCells);
        if (newCell && this.multiply >= 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var Ru = new Rus(newX, newY);
            predatorArr.push(Ru);
            this.multiply = 0;
        }
    }
}