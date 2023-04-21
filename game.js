const $canvas = document.getElementById("game");
const game = $canvas.getContext("2d");

let canvasSize;
let elementsSize;

window.addEventListener("load", setCanvasSize)
window.addEventListener("resize", setCanvasSize)

function startGame (){    
    game.font = elementsSize*.8 + "px Verdana";
    game.textAlign = "end";
   
    for (let index = 1; index <= 10; index++) {
        game.fillText(emojis['X'], elementsSize , elementsSize * index);
    }    
}

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

    //game.font = "25px Arial";
    //game.fillStyle = "purple";
    //game.textAlign = "center";//Toma con referencia la posición del .fillText
    //game.fillText("Hola", 25, 25);
    //game.fillRect(25,25,50,50)
    //game.clearRect(0,100,50,50)

    const arreglo =[]
    maps.forEach(element => {
        arreglo.push = element
            
    });
    console.log(arreglo)