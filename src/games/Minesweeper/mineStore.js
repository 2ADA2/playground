import {makeAutoObservable} from "mobx";

class MineStore {
    end = localStorage.getItem("mineEnd");
    constructor() {
        makeAutoObservable(this)
    }
}

export default new MineStore()