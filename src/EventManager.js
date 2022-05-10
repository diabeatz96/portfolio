function EventManager() {
        onCollide("player", "portal", () => {
            const person = (get("player")[0])

            add([
                text("Press E", {size: 100}),
                pos(person.pos.x, person.pos.y - 40),
                width(24),
                height(24),
                "E Text"
            ])

            wait(3, () => {
                console.log("It's Destroyed!")
                destroyAll("E Text")
            })
        })



}

export default EventManager;