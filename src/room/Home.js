import player from "../components/player";

function Home() {
    player();
    console.log('Home dog')

    onKeyPress("backspace", () => {
        go("Portfolio")
    })

    add([
        pos(24, 24),
        text("ohhi", {
            size: 48, // 48 pixels tall
            width: 320, // it'll wrap to next line when width exceeds this value
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])


    add([
        rect(width(), 24),
        area(),
        outline(1),
        pos(0, height() - 24),
        solid(),
    ])


}


export default Home;
