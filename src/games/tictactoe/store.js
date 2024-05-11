import {makeAutoObservable} from "mobx";

class tttStore {
    x = 0;
    o = 0;

    constructor(){
        makeAutoObservable(this)
    }
    setX(){
        this.x = this.x + 1
    }
    setO(){
        this.o = this.o + 1
    }
}

export default new tttStore()