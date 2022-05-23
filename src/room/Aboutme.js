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
        pos(300, -40),
        text("About Me", {
            size: 32, // 48 pixels tall
            width: 320, // it'll wrap to next line when width exceeds this value
            font: "apl386o", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    add([
        pos(100, 0),
        text("I am a software engineer located in NYC, I am currently transitioning from the film industry into web and game development. I am fluent in Javascript, React, C++, Unreal Engine and much more.", {
            size: 20, // 48 pixels tall
            width: 700, // it'll wrap to next line when width exceeds this value
            font: "apl386", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])


    addLevel([
        "                           ",
        "                           ",
        "                           ",
        "                           ",
        "                           ",
        "                   X       ",
        "                           ",
        "                           ",
        "                           ",
        " @                        #",
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
            scale(0.1),
            "picture"
        ]
    })

    player();
    UI();
    background("background2", 1.7, "center");
    EventManager();
}


export default AboutMe;
