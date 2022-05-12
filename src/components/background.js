function background(image, s, orig) {
    let background = add([
        sprite(`${image}`),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        origin(`${orig}`),
        // Allow the background to be scaled
        scale(s),
        z(-10),
        // Keep the background position fixed even when the camera moves
        fixed(),
        "background"
    ]);
}

export default background;