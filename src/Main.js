import kaboom from "kaboom";
import Home from "./room/Home";
import Portfolio from "./room/Portfolio";


kaboom({
    width: 1000,
    height: 500,
    font: "sinko",
    stretch: true,
});

gravity(640);

// Loading Assests
loadSprite("bean", "sprites/bean.png")
loadAseprite("player", "sprites/player/Warrior-sheet.png", "sprites/player/Warrior.json")
loadSprite("teleporter", "sprites/objects/teleporter.png")
loadSprite("background", "sprites/background/temp.png");
loadAseprite("tile", "sprites/objects/DarkForestTile.png", "sprites/objects/DarkForestTile.Json")


scene("Home", Home)
scene("Portfolio", Portfolio)


go("Home");