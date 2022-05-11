import kaboom from "kaboom";
import Home from "./room/Home";
import Portfolio from "./room/Portfolio";
import AboutMe from "./room/Aboutme";

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
loadAseprite("cat", "sprites/objects/Cat.png", "sprites/objects/Cat.Json")
loadAseprite("portal", "sprites/objects/Portal.png", "sprites/objects/Portal.Json")


scene("Home", Home)
scene("Portfolio", Portfolio)
scene("AboutMe", AboutMe)

go("Home");