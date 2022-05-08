import kaboom from "kaboom";
import Home from "./room/Home";
import Portfolio from "./room/Portfolio";

kaboom();

// load a sprite "bean" from an image
loadSprite("bean", "sprites/bean.png")
loadAseprite("player", "sprites/player/Warrior-sheet.png", "sprites/player/Warrior.json")

scene("Home", Home)
scene("Portfolio", Portfolio)

go("Home");