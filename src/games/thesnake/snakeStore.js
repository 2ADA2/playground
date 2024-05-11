import {makeAutoObservable} from "mobx";
import {createApple} from "./createApple";

class SnakeStore {
    end = false
    start = false

    snake = [[5,10],[6,10]]
    way= 1
    absoluteWay = 1
    apple = createApple(this.snake)
    isAte = false

    record = localStorage.getItem("snake-record") ? Number(localStorage.getItem("snake-record")) : 0;
    apples = 0;

    time = Number(localStorage.getItem("snakeTime")) || 0

    constructor() {
        makeAutoObservable(this)
    }

    setWay(way) {
        this.way = way
    }

    setSnake(snake){
        this.snake = snake.slice()
    }

    setApple(apple){
        this.apple = apple
    }

    setIsAte(isAte){
        this.isAte = isAte
    }

    setAbsoluteWay(absoluteWay){
        this.absoluteWay = absoluteWay
    }

    setEnd(end){
        this.end = end
    }
    setStart(start){
        this.start = start
    }

    setApples(apples){
        this.apples = apples
    }

    setRecord(record){
        this.record = record
    }
    setTime () {
        this.time += 1
        localStorage.setItem("snakeTime", this.time)
    }
}

export default new SnakeStore()