function camera(state) {

    switch(state) {
        case 0: camScale(0.7)
        break;
        case 1: camScale(1.5)
        break;
        default: camScale(0.7);
    }

}

export default camera;