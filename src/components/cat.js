function cat() {

    const cat  = add([
        sprite("cat", {anim: "Idle"}),
        area(),
        body(),
        pos(130, 30),
        scale(2),
    ])


    const anims = ["Idle2", "CatLaugh", "Idle", "Kill", "Idle3"]
    loop(5, () => {
            cat.play(anims[randi(0, 5)]);
    })


}

export default cat;
