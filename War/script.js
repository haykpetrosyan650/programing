var grassArr = []
var grassEaterArr = []
var predatorArr = []
var RusArr = []
var AmnArr = []
function matrixGenerator(matrixSize,grassCount,grEatCount,predatorCount,RusCount,AmnCount){
   
          let matrix = [];

            for(let i = 0; i < matrixSize;i++){
                    matrix[i] = []
                for(let j = 0; j < matrixSize; j++){
                        matrix[i][j] = 0;
                }
            }

            for(let i = 0 ; i < grassCount; i++ ){
                  
                 let x  = Math.floor(Math.random() * matrixSize)
                 let y  = Math.floor(Math.random() * matrixSize)

                       if(matrix[y][x] == 0){
                           matrix[y][x] = 1;
                       }

            }

            for(let i = 0 ; i < grEatCount; i++ ){
                  
               let x  = Math.floor(Math.random() * matrixSize)
               let y  = Math.floor(Math.random() * matrixSize)

                     if(matrix[y][x] == 0){
                         matrix[y][x] = 2;
                     }

          }
          for(let i = 0 ; i < predatorCount; i++ ){
                  
               let x  = Math.floor(Math.random() * matrixSize)
               let y  = Math.floor(Math.random() * matrixSize)

                     if(matrix[y][x] == 0){
                         matrix[y][x] = 3;
                     }

          }

          for (var i = 0; i <RusCount; i++) {

            let x  = Math.floor(Math.random() * matrixSize)
            let y  = Math.floor(Math.random() * matrixSize)
             
                    if (matrix[y][x] == 0) {
                        matrix[y][x] = 4
            
                 }
          }
          for (var i = 0; i <AmnCount; i++) {

            let x  = Math.floor(Math.random() * matrixSize)
            let y  = Math.floor(Math.random() * matrixSize)
             
                    if (matrix[y][x] == 0) {
                        matrix[y][x] = 5
            
                 }
          }
       return matrix ;     
}



let matrix = matrixGenerator(30,30,30,25,6,6);
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