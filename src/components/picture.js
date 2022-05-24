function picture(image, size, position, link) {
   add([
        sprite(`${image}`),
        scale(size),
        pos(position),
        outline(500, RED),
        area(),
        `${image}1`
    ])

    onClick(`${image}1`, () => {
        window.open(`${link}`)
    })


    const pic = get(`${image}1`)[0]

    pic.onUpdate(() => {
        pic.scale = `${size}`
    })


    onHover(`${image}1`, (c) => {
        cursor("pointer");
    })
}


export default picture;