(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),
width = 900,
height = 200,
level = 1,
player = {
    x: width / 2,
    y: height - 15,
    width: 15,
    height: 15,
    speed: 3,
    velX: 0,
    velY: 0,
    jumping: false,
    grounded: false
},
keys = [];
canvas.width = width;
canvas.height = height;
var boxes = initLevel();
specials = [];
var bounce = new Audio("bounce.wav");
var goal = new Image();
goal.src = "goal.png";
var redButtonUp = new Image();
redButtonUp.src = "redButtonUP.png";
var redButtonDown = new Image();
redButtonDown.src = "redButtonDOWN.png";
var platformColor = "white";
var platformLevelColor = "white";

function update() {

    // check keys
    if (keys[38]) {
        // up arrow
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 1.5;
            bounce.currentTime = 0;
            bounce.play();
        }
    }
    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37]) {
        // left arrow                  
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    friction = .8;
    gravity = 0.3;
    if (!player.grounded) {
        friction = .9
        player.velY += gravity;
        player.y += player.velY;
    }
    player.velX *= friction;
    //Prepare to draw
    ctx.clearRect(0, 0, width, height);
    //Draw Platforms
    ctx.fillStyle = platformColor;
    ctx.beginPath();
    drawBoxes();
    platformColor = platformLevelColor;
    if (player.grounded) {
        player.velY = 0;
    }

    player.x += player.velX;
    player.y += player.velY;
    ctx.fill();

    drawSpecials();

    //Draw Goal
    ctx.drawImage(goal, boxes[boxes.length - 1].x, boxes[boxes.length - 1].y);

    

    if (colCheck(player, boxes[boxes.length - 1])) {
        initLevel(++level);
    }
    //Draw Player
    ctx.fillStyle = "#2EFEC8";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // run through the loop again
    requestAnimationFrame(update);
}

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)         
        var oX = hWidths - Math.abs(vX),
			oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}

function initLevel(){
    boxes = [];
    specials = [];
    player.x = 300;
    player.y = height - 20;
    boxes = loadLevel(level);
    platformColor = platformLevelColor;
    document.getElementById("level").innerHTML = "Level : " + level.toString();
    return boxes;
}

function drawBoxes() {
    player.grounded = false;
    for (var i = 0; i < boxes.length - 1; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        var dir = colCheck(player, boxes[i]);
        if (dir == "l" || dir == "r") {
            player.velX = 0;
            player.jumping = false;
        }
        else if (dir == "b") {
            player.grounded = true;
            player.jumping = false;
        }
        else if (dir == "t") {
            player.velY *= -1;
        }
    }
}

function drawSpecials() {
    //Draw Special Items
    for (var i = 0; i < specials.length; i++) {
        var dir = colCheck(player, specials[i]);
        if (dir == "l" || dir == "r") {
            player.velX = 0;
            player.jumping = false;
        }
        else if (dir == "b") {
            player.grounded = true;
            player.jumping = false;
            if (specials[i].type == "lightButton") {
                ctx.drawImage(redButtonDown, specials[i].x, specials[i].y-5);
                platformColor = "white";
            }
        }
        else if (dir == "t") {
            player.velY *= -1;
        }
        if (specials[i].type == "lightButton" && dir != "b") {
            ctx.drawImage(redButtonUp, specials[i].x, specials[i].y-5);
        }
    }
}

window.addEventListener("load", function () {
    update();
});

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});