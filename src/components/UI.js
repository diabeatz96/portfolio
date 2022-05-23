let clickSpeed = 240;

function UI() {

    const left = add([
        sprite("LeftKey", {}),
        pos(750, 400),
        scale(3),
        z(1),
        area(),
        fixed(),
        "left"
    ])

    const right = add([
        sprite("RightKey", {}),
        pos(850, 400),
        scale(3),
        z(1),
        area(),
        fixed(),
        "right"
    ])

    const bg = add([
        rect(200, 75),
        pos(830, 430),
        origin("center"),
        opacity(0.3),
        outline(4, WHITE),
        z(0),
        fixed()
    ])

/*
    onDraw(() => {
        console.log("Drawing....");
        const mx = (width() - px * 2) / 2
        const my = (height() - py * 2) / 1
        const p = (x, y) => vec2(x, y).scale(mx, my).add(px, py)

        drawRect({
            pos: vec2(-175, 80),
            width: w(60, 70, 1),
            height: w(350, 370, 1),
            origin: "center",
            radius: w(0, 32, 4),
            color: rgb(w(128, 255, 4), 255, w(128, 255, 8)),
        })

        drawText({
            text: "yo",
            pos: p(1, 1),
            origin: "center",
            size: w(80, 120, 2),
            color: rgb(w(128, 255, 4), w(128, 255, 8), w(128, 255, 2)),
        })

    })

 */

    const bglogo = add(["bglogo", fixed(), rect(65, 260), pos(20, 130), opacity(0.5), outline(4, WHITE)])
    const github = add([fixed(), sprite("github"), pos(25, 155), scale(0.1), area(), "git"]);
    const linkedin = add(["linkedin", fixed(), sprite("linkedin"), pos(20, 203), scale(0.1), area()]);
    const twitter = add(["twitter", fixed(), sprite("twitter"), pos(27, 260), scale(0.022), area()]);
    const resume = add(["resume", fixed(), sprite("resume"), pos(25, 315), scale(0.1), area()]);


    const t = (n = 1) => time() * n
    const w = (a, b, n) => wave(a, b, t(n))
    const px = 160
    const py = 200



    onDraw(() => {


        drawSprite({
            sprite: "github",
            pos: vec2(52, 180),
            origin: "center",
            scale: w(0.11, 0.12, 4),
            fixed: true,
        })

        drawSprite({
            sprite: "linkedin",
            pos: vec2(52, 235),
            origin: "center",
            scale: w(0.1, 0.11, 4),
            fixed: true,
        })

        drawSprite({
            sprite: "twitter",
            pos: vec2(52, 285),
            origin: "center",
            scale: w(0.022, 0.023, 4),
            fixed: true,
        })

        drawSprite({
            sprite: "resume",
            pos: vec2(52, 342),
            origin: "center",
            scale: w(0.1, 0.11, 4),
            fixed: true,
        })


    })

    onHover(`git`, () => {
        cursor("pointer");
    })

    onHover(`linkedin`, () => {
        cursor("pointer");
    })

    onHover(`twitter`, () => {
        cursor("pointer");
    })

    onHover(`resume`, () => {
        cursor("pointer");
    })


    onClick("git", () => {
        console.log("Activated GIT")
        window.open("https://github.com/diabeatz96")
    })

    onClick("linkedin", () => {
        console.log("Activated linkedin")
        window.open("https://www.linkedin.com/in/adamkostandy/")
    })

    onClick("twitter", () => {
        console.log("Activated twitter")
        window.open("https://twitter.com/bigblobgame")
    })

    onClick("resume", () => {
        console.log("Activated resume")
        window.open("https://drive.google.com/uc?export=download&id=12KZzTp7-tsagmgk3s_OgIsBS_pbO1aXQ")
    })
    const player = (get("player"))[0];


    /*
        We are returning the buttons to their original frames. using onHover
        to manipulate the frame of the button when clicked.
     */

    left.onUpdate(() => {
        left.frame = 0;
        cursor("default");
    })

    right.onUpdate(() => {
        right.frame = 0;
        cursor("default");
    })

    onHover("left", (() => {
        if(mouseIsDown()) {
            player.move(-clickSpeed, 0)
            player.flipX(true)
            left.frame = 1;
            if (player.isGrounded() && player.curAnim() !== "Run") {
                player.play("Run")
            }
        }
    }))


    onHover("right", (() => {
        if(mouseIsDown()) {
            player.move(clickSpeed, 0)
            player.flipX(false)
            right.frame = 1;
            if (player.isGrounded() && player.curAnim() !== "Run") {
                player.play("Run")
            }
        }
    }))
}

export default UI;