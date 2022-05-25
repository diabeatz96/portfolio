import kaboom from "kaboom";
import Home from "./room/Home";
import Portfolio from "./room/Portfolio";
import AboutMe from "./room/Aboutme";
import Vertical from "./room/Vertical"


function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false; }
}

if (isMobile()) {
    window.location.replace("https://adamkostandy.netlify.app/mobile");
}

kaboom({
    width: 1000,
    height: 500,
    font: "sinko",
    stretch: true,
});


gravity(640);


/*
        Sound Assests Mp3
 */

loadSound("theme", "sprites/music/sound.mp3")
loadSound("walk", "sprites/music/walk.wav")
// Button Assests
loadAseprite("AKey", "sprites/misc/A.png", "sprites/misc/A.json")
loadAseprite("DKey", "sprites/misc/D.png", "sprites/misc/D.json")
loadAseprite("LeftKey", "sprites/misc/ALeft.png", "sprites/misc/ARROWLEFT.json")
loadAseprite("RightKey", "sprites/misc/ARight.png", "sprites/misc/ARROWRIGHT.json")



/*
     Resume Button Links
 */

loadSprite("github", "sprites/misc/github.png")
loadSprite("resume", "sprites/misc/resume.png")
loadSprite("linkedin", "sprites/misc/linkedin.png")
loadSprite("twitter", "sprites/misc/twitter.png")


/*
    Game Assests
 */

loadSprite("me", "sprites/aboutme/me.jpg");
loadSprite("projectzeus", "sprites/misc/projectzeus.png")
loadSprite("firstsign", "sprites/misc/FirstSign.png");
loadSprite("guessgame", "sprites/misc/guessgame.png");
loadAseprite("player", "sprites/player/characters.png", "sprites/player/characters.json");
loadSprite("teleporter", "sprites/objects/teleporter.png");
loadSprite("background", "sprites/background/temp.png");
loadSprite("background1", "sprites/background/Background2.png");
loadSprite("background2", "sprites/background/Background.png");
loadSprite("amyabubble", "sprites/misc/AmyaBubble.png")
loadAseprite("tile", "sprites/objects/DarkForestTile.png", "sprites/objects/DarkForestTile.Json");
loadAseprite("cat", "sprites/objects/Cat.png", "sprites/objects/Cat.Json");
loadAseprite("portal", "sprites/objects/Portal.png", "sprites/objects/Portal.Json");


/*
    Scenes
 */
scene("Home", Home)
scene("Portfolio", Portfolio)
scene("AboutMe", AboutMe)
scene("Vertical", Vertical)

go("Home")