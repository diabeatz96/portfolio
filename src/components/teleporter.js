import portfolio from "../room/Portfolio";

function teleporter() {

    const teleporter = add(
        [
            sprite("teleporter"),
            origin("center"),
            area({ scale: 0.3 , offset: (-10, -30)}),
            pos(100, 420),
            scale(0.3),
            "teleporter"
        ])


}

export default teleporter;