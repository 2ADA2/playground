import {makeAutoObservable} from "mobx";
import {generateField} from "./generateField";
import {isArraysEqual} from "../../functions/checkArrays";
import {clear} from "@testing-library/user-event/dist/clear";
import Global from "../../store/global";

class MineStore {
    end = false;
    start = false
    win = false

    field = generateField([])
    detected = []
    opened = []

    timer = 0
    interval = null

    time = Number(localStorage.getItem("mineTime")) || 0

    constructor() {
        makeAutoObservable(this)
    }

    updateField(field) {
        this.field = field;
    }

    setEnd(end) {
        this.end = end;
        if(this.end){
            clearInterval(this.interval);
        }
    }

    setWin(win) {
        this.win = win
        clearInterval(this.interval)
    }

    setStart(start) {
        this.start = start;
        if(start){
            this.interval = setInterval(() => {
                this.timer += 1
            }, 1000)
        }
    }

    setDetected(detected) {
        this.detected = detected
    }

    setOpened(opened) {
        let newOpened = []
        checkOpen: for(let block of opened){
            for(let open of newOpened){
                if(isArraysEqual(block, open)) continue checkOpen
            }
            newOpened.push(block)
        }

        this.opened = newOpened

        if ((this.opened.length === 15*20 - 40) && !this.end) {
            this.setWin(true)
        }
    }

    restart(){
        this.end = false;
        clearInterval(this.interval)
        this.start = false;
        Global.setMinesweeperRecords(this.timer)
        Global.setMinesweeperRecordsMines(this.opened.length)
        this.win = false;
        this.field = generateField([])
        this.detected = []
        this.opened = []

        this.timer = 0
    }
    setTime () {
        this.time += 1
        localStorage.setItem("mineTime", this.time)
    }
}

export default new MineStore()