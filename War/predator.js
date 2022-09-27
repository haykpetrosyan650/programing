let LivingCreature = require("/.LivingCreature")

module.exports = class Predator extends LivingCreature {
    constructor(x, y) {
     super(x,y)
        this.energy = 3;
    
        this.directions = [];
    }


    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(2);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var pre = new Predator(newX, newY);
            predatorArr.push(pre);
            this.multiply = 0;
        }
    }

    move() {
        this.energy--
        var emptyCells = super.chooseCell(2)
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


    }



}