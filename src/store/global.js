import {makeAutoObservable} from "mobx";

class Global {
    ttfeRecords = localStorage.getItem("ttfeRecords") ? JSON.parse(localStorage.getItem("ttfeRecords")) : [];
    snakeRecords = localStorage.getItem("snakeRecords") ? JSON.parse(localStorage.getItem("snakeRecords")) : [];
    mineSweeperRecords = localStorage.getItem("mineSweeperRecords") ? JSON.parse(localStorage.getItem("mineSweeperRecords")) : [];
    mineSweeperRecordsMines = localStorage.getItem("mineSweeperRecordsMines") ? JSON.parse(localStorage.getItem("mineSweeperRecordsMines")) : [];
    totalTime = Number(localStorage.getItem("totalTime")) || 0;

    constructor() {
        makeAutoObservable(this)
    }

    setTtfeRecords(newRecord) {
        const len = this.ttfeRecords.length;
        const newRec = this.ttfeRecords.slice(len - 50, len);
        newRec.push(newRecord);
        localStorage.setItem("ttfeRecords", JSON.stringify(newRec))
        this.ttfeRecords = newRec
    }

    setSnakeRecords(newRecord) {
        const len = this.snakeRecords.length;
        const newRec = this.snakeRecords.slice(len - 50, len);
        newRec.push(newRecord);
        localStorage.setItem("snakeRecords", JSON.stringify(newRec))
        this.snakeRecords = newRec
    }

    setMinesweeperRecords(newRecord) {
        const len = this.mineSweeperRecords.length;
        const newRec = this.mineSweeperRecords.slice(len - 50, len);
        newRec.push(newRecord);
        localStorage.setItem("mineSweeperRecords", JSON.stringify(newRec))
        this.mineSweeperRecords = newRec
    }

    setMinesweeperRecordsMines(newRecord) {
        const len = this.mineSweeperRecordsMines.length;
        const newRec = this.mineSweeperRecordsMines.slice(len - 50, len);
        newRec.push(newRecord);
        localStorage.setItem("mineSweeperRecordsMines", JSON.stringify(newRec))
        this.mineSweeperRecordsMines = newRec
    }

    setTotalTime (){
        this.totalTime += 1
        localStorage.setItem("totalTime", this.totalTime)
    }
}

export default new Global()