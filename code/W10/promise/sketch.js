let circleX, circleY, circleSize, circleColor;

function setup() {
    createCanvas(500, 300);
    circleX = width/2;
    circleY = height/2;
    circleSize = 50;
    circleColor = color(255, 0, 0);
}

function draw() {
    background(180);
    fill(circleColor);
    circle(circleX, circleY, circleSize);
    fill(0);
}

function mouseClicked() {
    console.log('click');
    anim();
}

function delay(timeDelay) {
    return new Promise ( (resolve) => setTimeout(resolve, timeDelay));
    //resolve => setTimeout(resolve, timeDelay);
};

async function anim() {
    await delay(1000);
    circleSize = 150;

    await delay(1000);
    circleX = width * 0.75;
    message = 'move to right';

    await delay(1000);
    circleColor = color(0, 255, 0);

    await delay(1000);
    circleY = height * 0.75;

    await delay(1000);
    circleSize = 50;
/*
    setTimeout(() => {
        circleSize = 150;
        setTimeout(() => {
            circleX = width * 0.75;
            setTimeout(() => {
                circleColor = color(0, 255, 0);
                setTimeout(() => {
                    circleX = width * 0.5;
                    setTimeout(() => {
                        circleSize = 50;
                    }, 1000)
                }, 1000)
            }, 1000);
        }, 1000);
    }, 1000);
*/
}

function callBack() {
    console.log('time out:', millis());
}

