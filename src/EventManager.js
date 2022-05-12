function EventManager() {

    const person = (get("player")[0])
    const portal = (get("portal")[0])
    const portal2 = (get("portal2")[0])


    /**
     * @INFO Portal Collisions
     * Interactions with collisions of portals
     */

    onCollide("player", "portal", () => {

        let time = 1;

        loop(1, () => {
            destroyAll("E Text")
            const word = add([
                text(`Transporting..${time++}`, {size: 20}),
                pos(person.pos.x, person.pos.y - 40),
                width(24),
                height(24),
                "E Text"
            ])
        })

        wait(2, () => {
            console.log(get("Portfolio"))
            go("Portfolio")
        })
    })


    onCollide("player", "portal2", () => {
        let time = 1;

        loop(1, () => {
            destroyAll("E Text")
            const word = add([
                text(`Transporting..${time++}`, {size: 20}),
                pos(person.pos.x, person.pos.y - 40),
                width(24),
                height(24),
                "E Text"
            ])
        })

        wait(2, () => {
            go("AboutMe")
        })
    })

    onCollide("player", "portal3", () => {
        let time = 1;

        loop(1, () => {
            destroyAll("E Text")
            const word = add([
                text(`Transporting..${time++}`, {size: 20}),
                pos(person.pos.x, person.pos.y - 40),
                width(24),
                height(24),
                "E Text"
            ])
        })

        wait(2, () => {
            go("Home")
        })
    })

}


export default EventManager;