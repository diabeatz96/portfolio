function EventManager() {

    const person = (get("player")[0])
    const portal = (get("portal")[0])
    const portal2 = (get("portal2")[0])

    console.log(portal)
    console.log(person)

    if(portal.pos.dist(person.pos) <= 200) {

        const word = add([
            text("Walk into portal", {size: 30}),
            pos(person.pos.x, person.pos.y - 40),
            width(24),
            height(24),
            "E Text"
        ])

        wait(3, () => {
            destroy(word);
        })

    }


    onCollide("player", "portal", () => {

        let time = 0;

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

        wait(3, () => {
            go("Portfolio")
        })
    })




    onCollide("player", "portal2", () => {
        let time = 0;

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

        wait(3, () => {
            go("AboutMe")
        })
    })

}


export default EventManager;