// Colors
const dark1 = "#1e1e1e", dark2 = "#252525", dark3 = "#333333";
const light = "#d4d4d4", accent = "#7FFFD4";

const graphFn = (x) => Math.sin(x / 3) * 30;

const big = 1000;
const a = Array.from({ length: big * 2 + 1 }, (_, i) => i - big);
const b = a.map(graphFn);

const w = 400, h = 400;

let zm = 1;
const minZm = 0.2, maxZm = 10, zmSpeed = 2;

function drawGraph(zoom, log = "") {
    background(dark2);

    push(); // Saving original canvas config

    // Altering canvas config to use Carthesian Coordinate system
    translate(w / 2, h / 2);
    scale(zoom, -zoom);

    stroke(light);
    strokeWeight(1 / zoom); // Consistent for all zooms

    // Drawing the graph using lines
    for (let i = 1; i < a.length; i++) {
        line(a[i - 1], b[i - 1], a[i], b[i]);
    }

    pop(); // Reverting canvas confg changes

    textSize(12);
    text(log, 10, 10);
}

function setup() {
    const canvas = createCanvas(w, h);
    canvas.elt.setAttribute('tabindex', '0');

    scaleSlider = createSlider(0.2, 5, 1, 0.2);
    scaleSlider.id("scaler");
    //scaleSlider.input(() => drawGraph(scaleSlider.value()));

    drawGraph(1);


}

function draw() {
}

function mouseWheel(event) {
    let scroll = round(event.delta) / 1000 * zmSpeed;
    // event.delta returns a multiple of 100 (+ or -)

    zm -= scroll;
    zm = Math.min(Math.max(zm, minZm), maxZm);
    // Caps zm value b/w minZm and maxZm


    drawGraph(zm, zm);
}