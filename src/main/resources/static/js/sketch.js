let datain = [];
var data;

function setup() {
    var canvas = createCanvas(640, 480);
}

function newDrawing(datain) {
    for (var i = 0; i < datain.length; i++) {
        ellipse(datain[i].x, datain[i].y, 20, 20);
        fill(255, 0, 100);
    }
}

function mouseDragged() {
    var ans = [];
    if (mouseIsPressed === true) {
        fill(0, 0, 0);
        ellipse(mouseX, mouseY, 20, 20);
        ans[0] = mouseX
        ans[1] = mouseY
    }
    if (mouseIsPressed === false) {
        fill(255, 255, 255);
    }
    newDrawing(datain);
    return ans;
}

function getdatax() {
    return data.x;
}

function getdatay() {
    return data.y;
}

function setdata(datainp) {
    datain = datainp;
}

function limpiar() {
    canvas.clearRect(0, 0, 640, 480);
}