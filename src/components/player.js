import camera from "./camera";
import UI from "./UI";

function player() {

    let SPEED = 200;
    const JUMPFORCE = 240;
    let inDialog = true;

    const player = add([
        sprite("player"),
        pos(center()),
        scale(2),
        area({scale: 0.8, offset: (0, 15), width: 40}),
        body(),
        "player"
    ])

    const walk = play("walk", {
        volume: 0.1,
    })




    /**
     * Simple Camera Operations
     */

    camScale(0.7);


    onKeyRelease("tab", () => {
        console.log("Hi!");
        debug.log(inDialog);
        inDialog = !inDialog;
        if(inDialog === true) {
            camera(0);
        } else if (inDialog === false) {
            camera(1);
        }
    })

    player.onUpdate(() => {
        camPos(player.pos);
    })

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

    onKeyDown(["a", "left"], () => {
        player.move(-SPEED, 0)
        player.flipX(true)
        if (player.isGrounded() && player.curAnim() !== "Run") {
            player.play("Run")
        }
    })

    onKeyDown(["d", "right"], () => {
        player.move(SPEED, 0)
        player.flipX(false)
        if (player.isGrounded() && player.curAnim() !== "Run") {
            player.play("Run")
        }
    })

    onKeyRelease(["a", "d", "left", "right"], () => {
        // Only reset to "idle" if player is not holding any of these keys
        if (player.isGrounded() && (!isKeyDown("a") && !isKeyDown("d")) || (!isKeyDown("left") && !isKeyDown("right"))) {
            player.play("Idle")
        }
    })

    onKeyPress("space", () => {
        SPEED = SPEED * 2;
    })

    onKeyRelease("space", () => {
        SPEED = 200;
    })

    /**
     * Mouse Movement
     */


    onMouseRelease(() => {
        if (player.isGrounded()) {
            player.play("Idle")
        }
    })

}

export default player;