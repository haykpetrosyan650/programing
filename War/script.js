

console.log(matrix);

var side = 35;



function setup(){
    frameRate(10)
     createCanvas(matrix[0].length * side, matrix.length * side);

       for(var y = 0 ; y < matrix.length ;y++){
            for(var x = 0; x < matrix[y].length;x++){
                           if(matrix[y][x] == 1){
                           var gr = new Grass(x,y)

                                grassArr.push(gr)
                           }else  if(matrix[y][x] == 2){
                              var grEat = new GrassEater(x,y)

                              grassEaterArr.push(grEat)
                         }else  if(matrix[y][x] == 3){
                              var pre = new Predator(x,y)

                              predatorArr.push(pre)
                         }else  if(matrix[y][x] == 4){
                            var Ru = new Rus (x,y)

                            RusArr.push(Ru)
                       }else  if(matrix[y][x] == 5){
                        var Am = new Amn (x,y)

                        RusArr.push(Am)
                   }
            }
       }
}

function draw(){
       for(var y = 0; y < matrix.length; y++){
            for(var x = 0; x < matrix[y].length;x++){
                     if(matrix[y][x] == 1){
                            fill("green") // Hay
                     }else if(matrix[y][x] == 2){
                         fill("yellow") // adrbejan
                  }else if(matrix[y][x] == 3){
                    fill(238,25,195) // Rusastan
             }else if (matrix[y][x] == 4) {
                 fill("red") // turq
             }else if (matrix[y][x] == 5) {
                fill("blue") // Hayastan
             } else {
                          fill("gray")
                     }
            

                     rect(x  * side ,y * side , side , side)
            }
       }

       for(var i in grassArr){
             grassArr[i].mul()
       }

       for (let j in grassEaterArr) {
          grassEaterArr[j].mul()
          grassEaterArr[j].eat()
      }

      for (let j in predatorArr) {
          predatorArr[j].mul()
  
      }
      for (let j in RusArr) {
          RusArr[j].eat()
         
      }
      for (let j in AmnArr) {
        AmnArr[j].eat()
        AmnArr[j].mul()
    } }




    var socket = io();