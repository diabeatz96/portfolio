function AboutMe() {
    console.log('Portfolio dog')

    onKeyPress("backspace", () => {
        go("Home")
    })

    add([
        pos(425, 50),
        text("AboutMe", {
            size: 32, // 48 pixels tall
            width: 320, // it'll wrap to next line when width exceeds this value
            font: "sinko", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
        }),
    ])

}


export default AboutMe;
