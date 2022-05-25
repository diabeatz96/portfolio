import player from "../components/player";
import background from "../components/background";
import EventManager from "../EventManager";
import UI from "../components/UI";

function AboutMe() {
    console.log('Portfolio dog')

    onKeyPress("backspace", () => {
        go("Home")
    })

    add([
        pos(550, -40),
        text("About Me", {
            size: 32, // 48 pixels tall
            width: 320, // it'll wrap to next line when width exceeds this value
            font: "apl386o", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    add([
        pos(450, 50),
        text("I am a junior software engineer located in NYC, I am currently transitioning from the film industry into web and game development. I am fluent in Javascript, React, C++, Unreal Engine and much more.", {
            size: 20, // 48 pixels tall
            width: 450, // it'll wrap to next line when width exceeds this value
            font: "apl386", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])


    addLevel([
        "                                     ",
        "                                     ",
        "                                     ",
        "                                     ",
        "                              X      ",
        "                                            3           ",
        "                                                        ",
        "                                              Q     B     ",
        "                                              {=====}     ",
        "           2@           F            #",
        " 1         {==========================}",
        "           ---------------------------",
        "   O TP    ---------------------------",
        "  {===}    ---------------------------",
        "           ---------------------------",
        "           ---------------------------",
        "           ---------------------------",
        "           ---------------------------",
        "           ---------------------------",
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
            "portal3"
        ],
        "#": () => [
            sprite("portal", {anim: "IDLE"}),
            scale(1.3),
            area({scale: 0.3}),
            origin("center"),
            "portal"
        ],
        "X": () => [
            sprite("me"),
            origin("center"),
            scale(0.13),
            "picture"
        ],
        "O": () => [
            sprite("player", {anim: "Ben"}),
            scale(2),
            origin("center"),
            body(),
            area()
        ],
        "P": () => [
            sprite("player", {anim: "Jerine", flipX: true}),
            scale(2),
            origin("center"),
            body(),
            area(),
        ],
        "Q": () => [
            sprite("player", {anim: "Saneesh", flipX: true}),
            scale(2),
            pos(10, -10),
            origin("center"),
            area({scale: 0.7}),
        ],
        "1": () => [
            sprite("saneeshbubble"),
            scale(0.3),
            origin("center")
        ],
        "2": () => [
            sprite("jerinebubble"),
            scale(0.3),
            origin("right")
        ],
        "3": () => [
            sprite("benbubble"),
            scale(0.3),
            origin("center")
        ],
        "T": () => [
            sprite("tree2"),
            scale(0.8),
            origin("bot"),
            z(-1),
            pos(-20, 60)
        ],
        "B": () => [
            sprite("tree5"),
            scale(0.8),
            origin("bot"),
            z(-1),
            pos(-20, 50)
        ],
        "F": () => [
            sprite("fox", {anim: "Idle"}),
            scale(2),
            origin("center")
        ],
    })

    player();
    UI();
    background("background2", 1.7, "center");
    EventManager();
}


export default AboutMe;
