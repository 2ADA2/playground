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
}

export default new SnakeStore()