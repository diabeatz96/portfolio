function Vertical () {

    add([
        text("Please use landscape when viewing this website! Reload Page When Flipped", {size: 20}),
        height(10),
        width(30),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        origin(`${orig}`),
        // Allow the background to be scaled
        // Keep the background position fixed even when the camera moves
        fixed(),
        "vertical text"
    ]);

}

export default Vertical;
