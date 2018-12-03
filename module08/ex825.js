let xPos;
function setup() {
    // create canvas
    createCanvas(800, 500);
    // set background color
    background('orange');
}
function draw() {
    for (xPos = 1; xPos < width; xPos = xPos + 10) {
        for (yPos = 1; yPos < height; yPos = yPos + 10) {
            point(xPos, yPos);
        }
    }

}