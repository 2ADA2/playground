import { makeAutoObservable } from "mobx";
import { spawn } from "../comopnents/finctions/spawn";
import Global from "../../../store/global";

class Store {
    field = (JSON.parse(localStorage.getItem('field')) || [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
    ]);
    end = 0;
    score = (Number(localStorage.getItem("score")) || 0);
    difference = 0;
    maxScore = (Number(localStorage.getItem("ttfe-record")) || 0);

    time = Number(localStorage.getItem("ttfeTime")) || 0;
    maxBlock = Number(localStorage.getItem("maxBlock")) || 2;

    constructor () {
        makeAutoObservable(this);
    }

    updateField(newField){
        this.field = newField.slice();
        localStorage.setItem('field', JSON.stringify(newField.slice()));
    }
    lose(){

        this.end = true
    }
    restart(){
        const newField = spawn([
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
        ])
        this.field = spawn(newField);
        this.end = false;
        localStorage.setItem('field', JSON.stringify(this.field.slice(0)));
        localStorage.setItem("score", 0)
        Global.setTtfeRecords(this.score)
        this.score = 0;
    }
    cleanField(){
        let newField = [];
        this.field.forEach(e => {
            let row = [];
            e.forEach(elem => {
                row.push(parseInt(elem));
            })
            newField.push(row);
        })
        this.field = newField;
    }
    setScore(score){
        score = Number(parseInt(score));
        const oldScore = this.score;
        this.score = this.score + score;
        this.difference = this.score-oldScore;
        localStorage.setItem("score", this.score);
        if(this.score > this.maxScore) {
            this.maxScore = this.score;
            localStorage.setItem("ttfe-record", JSON.stringify(this.maxScore));
        }
    }
    cleanDifference(){
        this.difference = 0;
    }

    setTime () {
        this.time = this.time + 1
        localStorage.setItem("ttfeTime", this.time)
    }

    setMaxBlock(block){
        if(this.maxBlock < block) {
            this.maxBlock = block
            localStorage.setItem("maxBlock", block)
        }
    }
}

export default new Store();