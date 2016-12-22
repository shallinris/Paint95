/**
 * Created by itc_user1 on 12/19/2016.
 */
var colorArray = ["cyan", "lime", "red", "yellow", "deepPink", "black"];
var selectedColor = "";
var circleStamp = 0;
var mouseState = 0;


function generateMenu() {
    toolBar();
    generateColors();
    generateEraser();
    generateCircleStamp();

}

function toolBar() {
    var toolBar = document.createElement('div');
    toolBar.id = "toolbar";
    document.body.appendChild(toolBar);
}

function generateColors() {

    for (var i = 0; i < colorArray.length; i++) {
        var colors = document.createElement('div');
        colors.id = colorArray[i];
        colors.classList.add("colors");
        colors.style.backgroundColor = colorArray[i];
        colors.addEventListener("click", selectColor);
        document.getElementById("toolbar").appendChild(colors);
    }
}
function generateEraser() {
    var eraser = document.createElement('img');
    eraser.id = "erase";
    eraser.addEventListener("click", selectColor);
    eraser.src = "./images/eraser.png";
    document.getElementById("toolbar").appendChild(eraser);

}
function generateCircleStamp() {
    var createCircleStamp = document.createElement('img');
    createCircleStamp.id = "circle";
    createCircleStamp.addEventListener("click", selectStamp);
    createCircleStamp.src = "./images/circle.png";
    document.getElementById("toolbar").appendChild(createCircleStamp);
}
function selectColor(e) {
    selectedColor = e.target.id;
    console.log(selectedColor);

}
function selectStamp(e) {
    circleStamp = 1;
    console.log(circleStamp);
}


function generateCanvas() {
    var canvas = document.createElement('div');
    canvas.id = "canvas";
    canvas.style.width = "500px";
    canvas.style.height = "500px";
    document.body.appendChild(canvas);

    var rows = 50;
    var cols = 50;
    for (var i = 0; i < rows; i++) {
        var numRows = document.createElement('div');
        numRows.classList.add("rows");
        canvas.appendChild(numRows);
        for (var j = 0; j < cols; j++) {
            var numCols = document.createElement('div');
            numCols.classList.add("cols");
            numCols.addEventListener("mousedown", onClick);
            numCols.addEventListener("mouseup", offClick);
            numCols.addEventListener("mousemove", draw);
            // numCols.addEventListener("click", postStamp);
            numRows.appendChild(numCols);

        }
    }
}
function onClick(e) {
    mouseState = 1;

    
}
function offClick(e) {
    mouseState = 0;
    
}
function draw(e) {
    if (selectedColor == "") {
        console.log("Please choose a color first!");
    }
    if(mouseState == 1) {
        if (selectedColor == "erase") {
            e.target.style.backgroundColor = "white";
            console.log(mouseState);
        }
        if (circleStamp == 1) { //buggy. doesnt go on canvas AND once it is clicked it gets posted along with any color you pick
            var stampOnCanvas = document.createElement('img');
            stampOnCanvas.src = "./images/circle.png";
            stampOnCanvas.id = "stampDimensions";
            document.getElementById("canvas").appendChild(stampOnCanvas);
            var x = e.pageX;
            var y = e.pageY;
            console.log(x, y);
            x -= document.getElementById("canvas").offsetLeft - 20;
            y -= document.getElementById("canvas").offsetTop - 10;
            stampOnCanvas.style.left = x +'px';
            stampOnCanvas.style.top = y +'px';
        }
        e.target.style.backgroundColor = selectedColor;
    }
}


function init() {
    generateMenu();
    generateCanvas();
    draw();
}








