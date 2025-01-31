let links = [];


function setup() {

    
    createCanvas(200, 200);
    background(190);
    
    for (let i = 0; i< 25; i++) {
        const link = createA("#", "Yahoo!");
        link.position (random(500), random(500));
        link.mouseClicked(onMouseClick);
        link.mouseOut(onMouseOut);
        link.mouseOver(onMouseOver);
        links.push(link);
    }

    //createP("this is from p5js");

    const p = createP("this is from p5js");
    p.position(100, 100);

    

}

function onMouseClick() {
    this.style("background-color", "green");
    this.style("color", "white");
}

function onMouseOver() {
    this.style("background-color", "pink");
    this.style("color", "black");
}

function onMouseOut() {
    this.style("background-color", "red");
    this.style("color", "white");
}