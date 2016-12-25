/**
 * Created by itc_user1 on 12/19/2016.
 */
var colorArray = ["cyan", "lime", "red", "yellow", "deepPink", "black"];
var selectedColor = "";
var stamp = 0;
var mouseState = 0;

function generateMenu() {
    toolBar();
    generateColors();
    generateEraser();
    generateStamp();
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

function generateStamp() {
    for (var i = 1; i < 4; i++) {
        var createNewStamp = document.createElement('img');
        createNewStamp.src = "./images/s" + i + ".png";
        createNewStamp.classList.add("myStamps");
        createNewStamp.id = "s" + i;
        createNewStamp.addEventListener("click", selectStamp);
        document.getElementById("toolbar").appendChild(createNewStamp);
    }
}

function selectColor(e) {
    selectedColor = e.target.id;
    console.log(selectedColor);
}

function selectStamp(e) {
    var pressedId = e.target.id;
    pressedId = pressedId.replace('s','');
    stamp = pressedId; //i think i need to change this to id
    console.log(stamp);
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
    if (selectedColor == "" && stamp == 0) {
        console.log("Please choose a color first!");
    }
    if(mouseState == 1) {
        if (selectedColor == "erase") {
            e.target.style.backgroundColor = "white";

        }
        if (stamp != 0) {

            var i = stamp;
            var stampOnCanvas = document.createElement('img');
                stampOnCanvas.src = "./images/s" + i + ".png";
                stampOnCanvas.id = "s" + i;
                stampOnCanvas.id = "stampDimensions";
                document.getElementById("canvas").appendChild(stampOnCanvas);


            var x = e.pageX;
            var y = e.pageY;
            console.log(x, y);
            x -= document.getElementById("canvas").offsetLeft + 20;
            y -= document.getElementById("canvas").offsetTop + 10;
            stampOnCanvas.style.left = x +'px';
            stampOnCanvas.style.top = y +'px';
            e.target.style.backgroundColor = "white"; //why doesnt this work
        }

        e.target.style.backgroundColor = selectedColor;
        stamp = 0;
        console.log(stamp);
    }
}

function init() {
    generateMenu();
    generateCanvas();
    draw();
}








