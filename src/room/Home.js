import player from "../components/player";
import teleporter from "../components/teleporter";
import background from "../components/background";

function Home() {
    player();
    teleporter();
    background();

    console.log('Home dog')

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
        rect(width(), 48),
        outline(4),
        area(),
        pos(0, height() - 48),
        // Give objects a solid() component if you don't want other solid objects pass through
        solid(),
    ])

    onCollide("teleporter", "player", () => {
        go("Portfolio");
    })

}


export default Home;
