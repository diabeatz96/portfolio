import player from "../components/player";
import background from "../components/background";
import EventManager from "../EventManager";
import picture from "../components/picture";
import UI from "../components/UI";

function Portfolio() {
    console.log('Portfolio dog')

    onKeyPress("backspace", () => {
        go("Home")
    })



    addLevel([
        "                           ",
        "                           ",
        "                           ",
        "                                                             C",
        "                           ",
        "                           ",
        "                                                                 ",
        "         2                                                                      3 ",
        "           P                                                                     ",
        " #                   T                                       B                Q  @",
        "{================================================================================}",
        "                                                                                  ",
        "                         1                                                         ",
        "                                                                                  ",
        "                       W                                                          ",
        "                     {===}                                                        ",
        "                                                                                  ",



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
            "portal2"
        ],
        "#": () => [
            sprite("portal", {anim: "IDLE"}),
            scale(1.3),
            area({scale: 0.3}),
            origin("center"),
            "portal3"
        ],
        "P": () => [
            sprite("player", {anim: "Binu"}),
            scale(2),
            origin("center"),
            pos(10, 26),
            area(),
        ],
        "Q": () => [
            sprite("player", {anim: "Jaijo"}),
            scale(2),
            pos(10, -7),
            origin("center"),
            area({scale: 0.7}),
        ],
        "W": () => [
            sprite("player", {anim: "Mike", flipX: true}),
            scale(2),
            origin("center"),
            body(),
            area(),
        ],
        "1": () => [
            sprite("mikebubble"),
            scale(0.3),
            origin("center")
        ],
        "2": () => [
            sprite("binububble"),
            scale(0.3),
            origin("center")
        ],
        "3": () => [
            sprite("jaijobubble"),
            scale(0.3),
            origin("center")
        ],
        "T": () => [
            sprite("tree4"),
            scale(0.8),
            origin("bot"),
            z(-1),
            pos(-20, 50)
        ],
        "B": () => [
            sprite("tree1"),
            scale(0.8),
            origin("bot"),
            z(-1),
            pos(-20, 50)
        ],
        "C": () => [
            sprite("crow", {anim: "Crow"}),
            scale(2),
            origin("center")
        ],
    })

    add([
        pos(225, 50),
        text("Portfolio", {
            size: 32, // 48 pixels tall
            width: 320, // it'll wrap to next line when width exceeds this value
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    add([
        pos(150, 100),
        text("Walk to the right to explore my projects!", {
            size: 24, // 48 pixels tall
            width: 500, // it'll wrap to next line when width exceeds this value
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    /*
          Project 1

          Project First Sign - First Sign.
     */
    add([
        pos(900, -45),
        text("The First Sign", {
            size: 18, 
            width: 320, 
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    add([
        pos(900, 180),
        text("A Horoscope application with daily updates for the sign of aries.", {
            size: 18,
            width: 400,
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])


    picture("firstsign", 0.1, vec2(900, -20), "https://thefirstsign.netlify.app/");

    /*

        Project 2

        Project Guessing Game

     */

    add([
        pos(1400, -45),
        text("Guessing Game", {
            size: 18,
            width: 320,
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    add([
        pos(1400, 190),
        text("Web application for playing a guessing game.", {
            size: 18,
            width: 400,
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])


    picture("guessgame", 0.23, vec2(1400, -20), "https://diabeatz96.github.io/guessgame/");

    /*
        Project 3.

        Project Zeus!
     */

    add([
        pos(2000, -45),
        text("Project Zeus", {
            size: 18,
            width: 320,
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    add([
        pos(2000, 200),
        text("A peer-to-peer coding platform to grade each others code.", {
            size: 18,
            width: 400,
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    picture("projectzeus", 0.20, vec2(2000, -20), "https://github.com/OPslimes")


    player();
    UI();
    background("background1", 3, "center");
    EventManager();

}


export default Portfolio;
