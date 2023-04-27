const $canvas = document.getElementById("game");
const game = $canvas.getContext("2d");
const $btnUp = document.getElementById("up");
const $btnDown = document.getElementById("down");
const $btnLeft = document.getElementById("left");
const $btnRight = document.getElementById("right");
const $spanLives = document.getElementById("lives");
const $spanTime = document.getElementById("time");


let canvasSize;
let elementsSize;
let level = 0;
let lives = 3;

let timeStart;
let timePlayer;
let timeInterval;




const playerPosition = {
    x: undefined,
    y: undefined
};

const giftPosition = {
    x: undefined,
    y: undefined
};

let enemyPositions =[];

window.addEventListener("load", setCanvasSize)
window.addEventListener("resize", setCanvasSize)





function setCanvasSize (){
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else {
        canvasSize = window.innerHeight * 0.8;
    }

    $canvas.setAttribute("width", canvasSize)
    $canvas.setAttribute("height", canvasSize)

    elementsSize = canvasSize / 10;
    startGame()
}

//metodo .split de los strings convierte un string en un arreglo
//metod .trim de los strings elimina los espacios en blanco

function startGame (){    
    game.font = elementsSize*.8 + "px Verdana";
    game.textAlign = "end";

    const map = maps[level];    
    if(!map){
        gameWin()
       return
    }

    if(!timeStart){
        timeStart = Date.now();
        timeInterval = setInterval(showTime, 100)
    }

    const mapRows = map.trim().split("\n");
    const mapRowCols = mapRows.map(elemento => elemento.trim(). split(""))
    //console.log (mapRows)
    //console.log(mapRowCols[0][0])

    showLives()

    enemyPositions = []
    game.clearRect(0, 0, canvasSize, canvasSize)
    mapRowCols.forEach((row, rowI) => { // se recibe al elemento y al indice
        row.forEach((col, colI) => { // se recibe al elemento y al indice
            const emoji = emojis[col]
            const posX = elementsSize * (colI + 1)
            const posY = elementsSize * (rowI + 1)

            if(col==="O"){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    //console.log(playerPosition)
                }
            }else if (col === "I"){
                giftPosition.x = posX;
                giftPosition.y = posY
            }else if (col === "X"){
                enemyPositions.push({
                    x: posX,
                    y: posY
                });
            }


            game.fillText(emoji, posX, posY)  
        });
    });
    movePlayer()

        
}

function movePlayer (){
    const giftCollisionX = playerPosition.x.toFixed(4) === giftPosition.x.toFixed(4);
    const giftCollisionY = playerPosition.y.toFixed(4) === giftPosition.y.toFixed(4);

    if(giftCollisionX && giftCollisionY){
        levelWin()
        
        
    }

    const enemyCollision = enemyPositions.find(enemy =>{
        const enemyCollisionX = enemy.x.toFixed(3) === playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) === playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
        
    });
    if(enemyCollision){
        levelFail()
        
        
        }
    

    game.font = elementsSize*.8 + "px Verdana";
    game.textAlign = "end";
    game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y)
}



function levelWin(){
    console.log("Subiste nivel")
    level ++
    startGame()
}
function levelFail(){
    console.log("lo lamento empieza de nuevo");
    lives--;
    
    if(lives <= 0){
        level = 0;
        lives = 3;
        //timeStart = undefined
   }  
   
    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame()
}

function gameWin(){
    clearInterval(timeInterval)
    console.log("Terminaste el juego")
}

function showLives(){
   const heartsArray = Array(lives).fill(emojis["HEART"])
    $spanLives.innerHTML = "";
    heartsArray.forEach (heart => $spanLives.append(heart))
}

function showTime (){
    $spanTime.innerHTML = Date.now() - timeStart
}
window.addEventListener("keydown", moveByKeys)
$btnUp.addEventListener("click", moveUp);
$btnDown.addEventListener("click", moveDown);
$btnLeft.addEventListener("click", moveLeft);
$btnRight.addEventListener("click", moveRight);

function moveByKeys(event){
    
   if(event.key === "ArrowUp") moveUp();
   else if(event.key === "ArrowDown") moveDown();
   else if(event.key === "ArrowLeft") moveLeft();
   else if(event.key === "ArrowRight") moveRight();
   

};
function moveUp(){
    console.log("hacia arriba")
    if((playerPosition.y - elementsSize)< elementsSize){
        console.log("out")
    }else{
        playerPosition.y -= elementsSize;
        startGame()
    }
    
};
function moveDown(){
    console.log("hacia abajo")
    if((playerPosition.y + elementsSize) > canvasSize){
        console.log("out")
    }else {
        playerPosition.y += elementsSize;
        startGame()
    }
    
};
function moveLeft(){
    console.log("hacia la izquierda")
    if((playerPosition.x - elementsSize) < elementsSize){
        console.log("out")
    }else{
        playerPosition.x -= elementsSize;
        startGame()
    }
    
};
function moveRight(){
    console.log("hacia la derecha")
    if((playerPosition.x + elementsSize) > canvasSize){
        console.log("out");
    }else {
        playerPosition.x += elementsSize;
        startGame()
    }
    
};


  
    //game.font = "25px Arial";
    //game.fillStyle = "purple";
    //game.textAlign = "center";//Toma con referencia la posición del .fillText
    //game.fillText("Hola", 25, 25);
    //game.fillRect(25,25,50,50)
    //game.clearRect(0,100,50,50)

    
 //_____Fin Opcion 2 ____________________________________________________
   

   //______Opcion 1__________________________________________________________________
        //for (let row = 1; row <= 10; row++) { //los canvas inician con el indice en 1
            //for (let col = 1; col <= 10; col++) {
            //game.fillText(emojis[mapRowCols[row-1][col-1]], elementsSize * col , elementsSize * row);   // row-1 / col-1 es por que los arreglos inician en 0 
            //}        
        //}
    //______Fin Opcion 1_________________________________________________________    