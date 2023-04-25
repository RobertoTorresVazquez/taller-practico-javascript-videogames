const $canvas = document.getElementById("game");
const game = $canvas.getContext("2d");
const $btnUp = document.getElementById("up");
const $btnDown = document.getElementById("down");
const $btnLeft = document.getElementById("left");
const $btnRight = document.getElementById("right");

let canvasSize;
let elementsSize;

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

    const map = maps[0];    
    const mapRows = map.trim().split("\n");
    const mapRowCols = mapRows.map(elemento => elemento.trim(). split(""))
    console.log (mapRows)
    console.log(mapRowCols[0][0])

    //_____Opcion 2 _________________________________________________________-
    mapRowCols.forEach((row, rowI) => { // se recibe al elemento y al indice
        row.forEach((col, colI) => { // se recibe al elemento y al indice
            const emoji = emojis[col]
            const posX = elementsSize * (colI + 1)
            const posY = elementsSize * (rowI + 1)
            game.fillText(emoji, posX, posY)  
        });
    });

    //_____Fin Opcion 2 ____________________________________________________
   

   //______Opcion 1__________________________________________________________________
        //for (let row = 1; row <= 10; row++) { //los canvas inician con el indice en 1
            //for (let col = 1; col <= 10; col++) {
            //game.fillText(emojis[mapRowCols[row-1][col-1]], elementsSize * col , elementsSize * row);   // row-1 / col-1 es por que los arreglos inician en 0 
            //}        
        //}
    //______Fin Opcion 1_________________________________________________________    
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
};
function moveDown(){
    console.log("hacia abajo")
};
function moveLeft(){
    console.log("hacia la izquierda")
};
function moveRight(){
    console.log("hacia la derecha")
};

    //game.font = "25px Arial";
    //game.fillStyle = "purple";
    //game.textAlign = "center";//Toma con referencia la posición del .fillText
    //game.fillText("Hola", 25, 25);
    //game.fillRect(25,25,50,50)
    //game.clearRect(0,100,50,50)

    
    