/**
 * Created by itc_user1 on 12/19/2016.
 */
var colorArray = ["cyan", "lime", "red", "yellow", "black"];
var selectedColor = "";
var mouseState = 0;


function generateMenu() {
    toolBar();
    generateColors();
    generateEraser();

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
function selectColor(e) {
    selectedColor = e.target.id;
    console.log(selectedColor);

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
            numCols.addEventListener("mousemove", draw);//mouseover


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

        }
        e.target.style.backgroundColor = selectedColor;
    }
}


function init() {
    generateMenu();
    generateCanvas();
    draw();
}








