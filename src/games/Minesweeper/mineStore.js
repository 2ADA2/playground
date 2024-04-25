import {makeAutoObservable} from "mobx";
import {generateField} from "./generateField";

class MineStore {
    end = false;
    start = false
    win = false

    field = generateField([])
    detected = []
    opened = []

    constructor() {
        makeAutoObservable(this)
    }

    updateField(field) {
        this.field = field;
    }

    setEnd(end) {
        this.end = end;
    }

    setWin(win) {
        this.win = win
    }

    setStart(start) {
        this.start = start;
    }

    setDetected(detected) {
        this.detected = detected
    }

    setOpened(opened) {
        this.opened = opened
    }

    restart(){
        this.end = false;
        this.start = false;
        this.win = false;
        this.field = generateField([])
        this.detected = []
        this.opened = []
    }
}

export default new MineStore()