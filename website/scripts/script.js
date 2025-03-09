function setup() {
    createCanvas(400, 400);
    background(190);

    circle(width/2, height/2, 200);
    const sideNavItems = selectAll('.side-nav-item');
    //sideNavItems라는 array생성, class가 side-nav-item인 요소들 안에 들어감
    for(let i = 0; i < sideNavItems.length; i++) {
        sideNavItems[i].mousePressed(onMouseClick);
        sideNavItems[i].mouseOver(onMouseOver);
        sideNavItems[i].mouseOut(onMouseOut);
    }
}

function onMouseClick() {
   const id = this.elt.dataset.id;
   const className = "." + id;
   const projects = selectAll(".project");
    for (let i = 0; i < projects.length; i++) {
        projects[i].hide();
    }
    const selectedProject = select(className);
    selectedProject.show();
}

function onMouseOver() {
    this.style("color", "red");
}

function onMouseOut() {
    this.style("color", "black");
}