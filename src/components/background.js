function background() {
    let background = add([
        sprite("background"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        origin("center"),
        // Allow the background to be scaled
        scale(1),
        z(-10),
        // Keep the background position fixed even when the camera moves
        fixed(),
        "background"
    ]);
}

export default background;