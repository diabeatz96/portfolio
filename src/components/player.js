function player() {

    const SPEED = 200;
    const JUMPFORCE = 240;

    const player = add([
        sprite("player"),
        pos(center()),
        scale(2),
        area({scale: 0.8, offset: (0, 15), width: 40}),
        body(),
        "player"
    ])

    /**
     * Animations
     */

    player.onGround(() => {
        if (!isKeyDown("a") && !isKeyDown("d")) {
            player.play("Idle")
        } else {
            player.play("Run")
        }
    })

    /**
     * Movement
     */
    console.log(player.isGrounded());

    onKeyDown("a", () => {
        player.move(-SPEED, 0)
        player.flipX(true)
        if (player.isGrounded() && player.curAnim() !== "Run") {
            player.play("Run")
        }
    })

    onKeyDown("d", () => {
        player.move(SPEED, 0)
        player.flipX(false)
        if (player.isGrounded() && player.curAnim() !== "Run") {
            player.play("Run")
        }
    })

    onKeyRelease(["a", "d"], () => {
        // Only reset to "idle" if player is not holding any of these keys
        if (player.isGrounded() && !isKeyDown("a") && !isKeyDown("d")) {
            player.play("Idle")
        }
    })

    /**
     * Mouse Movement
     */

    onMouseRelease(() => {
        if (player.isGrounded() && !isKeyDown("a") && !isKeyDown("d")) {
            player.play("Idle")
        }
    })

    onMouseDown(() => {
        console.log("Swag");
        let distance = mousePos().x;
        let newPos = distance - (player.pos.x);

       if (player.pos.x > mousePos().x) {
            player.flipX(true)
            player.move(newPos, 0);
        } else
            player.flipX(false)
            player.move(newPos, 0)

        debug.log(newPos);
        if (player.isGrounded() && player.curAnim() !== "Run") {
            player.play("Run")
        }
    })

}

export default player;