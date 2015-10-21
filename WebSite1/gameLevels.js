function loadLevel(level) {
    var boxes = []
    boxes.push({
        x: 0,
        y: height,
        width: width,
        height: 1
    })
    boxes.push({
        x: 0,
        y: 0,
        width: 1,
        height: height
    })
    boxes.push({
        x: width,
        y: 0,
        width: 1,
        height: height
    })
    boxes.push({
        x: 0,
        y: 0,
        width: width,
        height: 1
    })

    if (level == 1) {
        boxes.push({
            x: 30,
            y: height - 30,
            width: 30,
            height: 10
        });
        boxes.push({
            x: 800,
            y: height - 30,
            width: 30,
            height: 10
        });
        boxes.push({
            x: 600,
            y: height - 40,
            width: 50,
            height: 10
        })
        boxes.push({
            x: 80,
            y: height - 60,
            width: 300,
            height: 10
        })
        boxes.push({
            x: 400,
            y: height - 100,
            width: 100,
            height: 10
        })
        boxes.push({
            x: 300,
            y: height - 150,
            width: 50,
            height: 10
        })
        boxes.push({
            x: 300,
            y: 30,
            width: 15,
            height: 15
        })
    }
    else if (level == 3) {
        boxes.push({
            x: 630,
            y: height - 50,
            width: 20,
            height: 10
        })
        boxes.push({
            x: 500,
            y: height - 100,
            width: 50,
            height: 10
        })
        boxes.push({
            x: 150,
            y: height - 160,
            width: 300,
            height: 10
        })
        boxes.push({
            x: 0,
            y: height - 45,
            width: 60,
            height: 10
        })
        boxes.push({
            x: 0,
            y: height - 85,
            width: 60,
            height: 10
        })
        boxes.push({
            x: 0,
            y: height - 125,
            width: 60,
            height: 10
        })
        boxes.push({
            x: 0,
            y: height - 165,
            width: 60,
            height: 10
        })
        boxes.push({
            x: 10,
            y: height - 185,
            width: 15,
            height: 15
        })
    }
    else if (level == 4) {
        boxes.push({
            x: 800,
            y: height - 40,
            width: 25,
            height: 10
        })
        boxes.push({
            x: 740,
            y: height - 100,
            width: 25,
            height: 10
        })
        boxes.push({
            x: 700,
            y: height - 140,
            width: 35,
            height: 10
        })
        boxes.push({
            x: 660,
            y: height - 140,
            width: 20,
            height: 10
        })
        boxes.push({
            x: 600,
            y: height - 115,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 470,
            y: height - 100,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 350,
            y: height - 120,
            width: 30,
            height: 10
        })
        boxes.push({
            x: 300,
            y: height - 140,
            width: 15,
            height: 15
        })
    }
    else if (level == 2) {
        boxes.push({
            x: 360,
            y: 155,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 300,
            y: 140,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 160,
            y: 115,
            width: 110,
            height: 10
        })
        boxes.push({
            x: 360,
            y: 155,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 60,
            y: 110,
            width: 60,
            height: 15
        })
        boxes.push({
            x: 360,
            y: 155,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 100,
            y: 40,
            width: 80,
            height: 20
        })
        boxes.push({
            x: 220,
            y: 80,
            width: 120,
            height: 10
        })
        boxes.push({
            x: 365,
            y: 40,
            width: 30,
            height: 70
        })
        boxes.push({
            x: 430,
            y: 75,
            width: 110,
            height: 10
        })
        boxes.push({
            x: 540,
            y: 70,
            width: 100,
            height: 10
        })
        boxes.push({
            x: 640,
            y: 65,
            width: 110,
            height: 15
        })
        boxes.push({
            x: 780,
            y: 40,
            width: 20,
            height: 110
        })
        boxes.push({
            x: 780,
            y: 150,
            width: 120,
            height: 15
        })
        boxes.push({
            x: 825,
            y: 110,
            width: 15,
            height: 15
        })

    }
    else if (level == 5) {
        boxes.push({
            x: 230,
            y: 170,
            width: 110,
            height: 10
        })
        boxes.push({
            x: 340,
            y: 160,
            width: 110,
            height: 10
        })
        boxes.push({
            x: 450,
            y: 150,
            width: 70,
            height: 10
        })
        boxes.push({
            x: 520,
            y: 70,
            width:20,
            height: 80
        })
        boxes.push({
            x: 590,
            y: 145,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 590,
            y: 115,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 540,
            y: 70,
            width: 90,
            height: 10
        })
        boxes.push({
            x: 420,
            y: 70,
            width: 70,
            height: 10
        })
        boxes.push({
            x: 285,
            y: 35,
            width: 85,
            height: 10
        })
        boxes.push({
            x: 400,
            y: 20,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 460,
            y: 20,
            width: 30,
            height: 10
        })
        boxes.push({
            x: 520,
            y: 25,
            width: 140,
            height: 10
        })
        boxes.push({
            x: 640,
            y: 10,
            width: 15,
            height: 15
        })
    }
    else if (level == 6) {
        boxes.push({
            x: 30 ,
            y: 160,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 0,
            y: 120,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 40,
            y: 80,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 0,
            y: 40,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 70,
            y: 25,
            width: 200,
            height: 10
        })
        boxes.push({
            x: 270,
            y: 25,
            width: 10,
            height: 125
        })
        boxes.push({
            x: 300,
            y: 120,
            width: 60,
            height: 10
        })
        boxes.push({
            x: 370,
            y: 95,
            width: 30,
            height: 10
        })
        boxes.push({
            x: 435,
            y: 95,
            width: 30,
            height: 10
        })
        boxes.push({
            x: 430,
            y: 50,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 510,
            y: 120,
            width: 30,
            height: 10
        })
        boxes.push({
            x: 580,
            y: 120,
            width: 50,
            height: 10
        })
        boxes.push({
            x: 550,
            y: 78,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 650,
            y: 75,
            width: 20,
            height: 10
        })
        boxes.push({
            x: 655,
            y: 50,
            width: 15,
            height: 15
        })
    }
    else if (level == 7) {
        boxes.push({
            x: 30,
            y: 150,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 30,
            y: 110,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 30,
            y: 70,
            width: 40,
            height: 10
        })
        boxes.push({
            x: 90,
            y: 30,
            width: 90,
            height: 10
        })
        boxes.push({
            x: 160,
            y: 20,
            width: 300,
            height: 10
        })
        boxes.push({
            x: 500,
            y: 20,
            width: 60,
            height: 10
        })
        boxes.push({
            x: 500,
            y: 65,
            width: 80,
            height: 15
        })
        boxes.push({
            x: 640,
            y: 20,
            width: 100,
            height: 10
        })
        boxes.push({
            x: 520,
            y: 5,
            width: 15,
            height: 15
        })
    }
    else if (level == 8) {
        specials.push({
            x: 5,
            y: 192,
            width: 20,
            height: 8,
            type: "lightButton"
        })
        boxes.push({
            x: 250,
            y: 150,
            width: 80,
            height:10
        })
        boxes.push({
            x: 340,
            y: 120,
            width: 90,
            height: 10
        })
        boxes.push({
            x: 455,
            y: 80,
            width: 110,
            height: 10
        })
        boxes.push({
            x: 565,
            y: 40,
            width: 130,
            height: 10
        })
        boxes.push({
            x: 625,
            y: 10,
            width: 15,
            height:15
        })
        platformLevelColor = "#1f1f1f"
    }

    return boxes;
}