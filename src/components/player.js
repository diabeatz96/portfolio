function player() {

    add([
        sprite("player")
    ])

    const player = add([
        sprite("player", {anim: 'Loop'}),
        pos(center()),
        scale(2),
        origin("center"),
        area(),
        body()

    ])


}

export default player;