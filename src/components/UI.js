
let clickSpeed = 240;

function UI() {

    const left = add([
        sprite("LeftKey", {}),
        pos(750, 400),
        scale(3),
        z(1),
        area(),
        fixed(),
        "left"
    ])

    const right = add([
        sprite("RightKey", {}),
        pos(850, 400),
        scale(3),
        z(1),
        area(),
        fixed(),
        "right"
    ])

    const bg = add([
        rect(200, 75),
        pos(830, 430),
        origin("center"),
        opacity(0.3),
        outline(4, WHITE),
        z(0),
        fixed()
    ])

    const player = (get("player"))[0];
    const leftz = (get("left"))[0];
    const rightz = (get("right"))[0];

    console.log(player, leftz, rightz);

    onHover("left", (() => {
        if(mouseIsDown()) {
            player.move(-clickSpeed, 0)
            player.flipX(true)
            if (player.isGrounded() && player.curAnim() !== "Run") {
                player.play("Run")
            }
        }
    }))

    onHover("right", (() => {
        if(mouseIsDown()) {
            player.move(clickSpeed, 0)
            player.flipX(false)
            if (player.isGrounded() && player.curAnim() !== "Run") {
                player.play("Run")
            }
        }
    }))


}

export default UI;