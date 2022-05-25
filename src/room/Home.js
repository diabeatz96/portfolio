import player from "../components/player";
import teleporter from "../components/teleporter";
import background from "../components/background";
import EventManager from "../EventManager";
import cat from "../components/cat";
import UI from "../components/UI";

function Home() {


    onKeyPress("backspace", () => {
        go("Portfolio")
    })


    /*
        UNIQUE POSITIONS IN HOME PAGE BEING ADDED.
     */

    add([
        sprite("AKey", {anim: "Loop", animSpeed: 0.6}),
        pos(200, -20),
        scale(2)
    ])
    add([
        sprite("DKey", {anim: "Loop", animSpeed: 0.6}),
        pos(250, -20),
        scale(2)
    ])
    add([
        sprite("LeftKey", {anim: "Loop", animSpeed: 0.6}),
        pos(200, 20),
        scale(2)
    ])
    add([
        sprite("RightKey", {anim: "Loop", animSpeed: 0.6}),
        pos(250, 20),
        scale(2)
    ])

    add([
        pos(425, 50),
        text("Home", {
            size: 48,
            width: 320,
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    add([
        pos(300, 100),
        text("Welcome to my website! My name's Adam and I am a Web and Game Developer.", {
            size: 24,
            width: 500,
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    /*
    add([
        pos(950, 130),
        text("A -> Left D -> Right Click to move", {
            size: 16, // 48 pixels tall
            width: 145, // it'll wrap to next line when width exceeds this value
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])
     */





    addLevel([
        " 1                         ",
        "                           ",
        "   O                       ",
        "  {===}                    ",
        "                           ",
        "                           ",
        "                           ",
        "                           ",
        "                           ",
        " @                     T   #",
        "{=========================}",
        "---------------------------",
        "---------------------------",
        "---------------------------",
        "---------------------------",
        "---------------------------",
        "---------------------------",
        "---------------------------",
        "---------------------------",
    ], {
        // define the size of each block
        width: 32,
        height: 32,
        // define what each symbol means, by a function returning a component list (what will be passed to add())
        "=": () => [
            sprite("tile", {frame: 1}),
            area(),
            solid(),
        ],
        "{": () => [
            sprite("tile", {frame: 0, animSpeed: 0.3}),
            area(),
        ],
        "}": () => [
            sprite("tile", {frame: 2}),
            area(),
            "corner",
        ],
        "$": () => [
            sprite("tile", {frame: 5}),
            area(),
            "danger",
        ],
        "-": () => [
            sprite("tile", {frame: 4}),
            area(),
            solid(),
        ],
        "[": () => [
            sprite("tile", {frame: 5}),
            area(),
        ],
        "]": () => [
            sprite("tile", {frame: 6}),
            area(),
            "corner",
        ],
        "@": () => [
            sprite("portal", {anim: "IDLE"}),
            scale(1.3),
            area({scale: 0.3}),
            origin("center"),
            "portal"
        ],
        "#": () => [
            sprite("portal", {anim: "IDLE"}),
            scale(1.3),
            area({scale: 0.3}),
            origin("center"),
            "portal2"
        ],
        "O": () => [
            sprite("player", {anim: "Amya"}),
            scale(2),
            origin("center"),
            body(),
            area()
        ],
        "T": () => [
            sprite("tree3"),
            scale(0.8),
            origin("bot"),
            z(-1),
            pos(-20, 50)
        ],
        "1": () => [
            sprite("amyabubble"),
            scale(0.3),
            origin("center")
        ],
    })

    background("background", 1, "center");
    player();
    UI();
    EventManager();
    cat();


}



export default Home;
