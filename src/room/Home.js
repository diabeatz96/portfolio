import player from "../components/player";
import teleporter from "../components/teleporter";
import background from "../components/background";
import EventManager from "../EventManager";
import cat from "../components/cat";

function Home() {

    player();
    teleporter();
    background();
    EventManager();
    cat();

    onKeyPress("backspace", () => {
        go("Portfolio")
    })


    add([
        pos(425, 50),
        text("Home", {
            size: 48, // 48 pixels tall
            width: 320, // it'll wrap to next line when width exceeds this value
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

    add([
        pos(300, 100),
        text("Welcome to my website! My name's Adam and I am a Web and Game Developer.", {
            size: 24, // 48 pixels tall
            width: 500, // it'll wrap to next line when width exceeds this value
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])




    addLevel([
        "                           ",
        "                           ",
        "                           ",
        "  {===}                    ",
        "                           ",
        "                           ",
        "                           ",
        " @                      @  ",
        "                           ",
        "                           ",
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
            scale(1.4),
            area(),
            "portal"
        ],
    })

    onCollide("teleporter", "player", () => {
        go("Portfolio");
    })

}


export default Home;
