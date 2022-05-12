function picture(image, size, position) {
    add([
        sprite(`${image}`),
        scale(size),
        pos(position),
        outline(500, RED),
        area(),
        `${image}1`
    ])

    onClick(`${image}1`, () => {
        window.open("https://google.com")
    })

    onHover(`${image}1`, (c) => {
        console.log("HOVER");
        cursor("pointer");
    })
}


export default picture;