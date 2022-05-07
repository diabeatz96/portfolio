import kaboom from "kaboom";

kaboom();

add([
    text("hello"),
    pos(120, 80),
]);

add([
    text("Dogs"),
    pos(150, 200)
]);

// load a sprite "bean" from an image
loadSprite("bean", "sprites/bean.png")

// add something to screen
add([
    sprite("bean"),
    pos(80, 40),
    scale(0.2)
])