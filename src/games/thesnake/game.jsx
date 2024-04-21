import {CreateField} from "./createField";
import "./snake.css";
import {useEffect, useState} from "react";
import {prohibitScroll} from "../TTFE/comopnents/finctions/prohibitScroll";
import snakeStore from "./snakeStore";
import {observer} from "mobx-react-lite";
import {createApple} from "./createApple";
import {isArraysEqual} from "../../functions/checkArrays";

export const TheSnake = observer(() => {
    const [start, setStart] = useState(snakeStore.start)

    const handleKeyDown = (e) => {
        if(!snakeStore.start) return
        const codes = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
        const index = codes.indexOf(e.code);
        if (index + 1) {
            if (Math.abs(index - snakeStore.absoluteWay) === 2) return
            snakeStore.setWay(index)
        }
    }

    const restart = () => {
        setStart(false)
        snakeStore.setEnd(true)
        snakeStore.setStart(false)
        snakeStore.setWay(1)
        snakeStore.setSnake([[5,10],[6,10]])
        snakeStore.setApple(createApple([[5,10],[6,10]]))
    }

    const checkEnd = (snake) => {
        const head = snake.at(-1).slice()
        if (head[0] >= 20 || head[0] < 0 || head[1] >= 20 || head[1] < 0) {
            restart()
            return;
        }
        for (let block of snake.slice(0, snake.length - 2)) {
            if (isArraysEqual(head, block)) {
                restart()
                return;
            }
        }
    }

    const move = () => {
        const way = snakeStore.way
        snakeStore.setAbsoluteWay(way)
        let snake = snakeStore.snake.slice()
        let head = snake.at(-1).slice()

        if (!snakeStore.isAte) {
            snake = snake.slice(1, snake.length)
        } else {
            snakeStore.setIsAte(false)
        }

        switch (way) {
            case 0:
                head.splice(1, 1, head[1] - 1)
                snake.push(head)
                break;
            case 1:
                head.splice(0, 1, head[0] + 1)
                snake.push(head)
                break;
            case 2:
                head.splice(1, 1, head[1] + 1)
                snake.push(head)
                break;
            default:
                head.splice(0, 1, head[0] - 1)
                snake.push(head)

        }

        snakeStore.setSnake(snake)
        if (snake.at(-1)[0] === snakeStore.apple[0] && snake.at(-1)[1] === snakeStore.apple[1]) {
            snakeStore.setApple(createApple(snake))
            snakeStore.setIsAte(true)
        }
        checkEnd(snake.slice())
    }

    useEffect(() => {
        let interval
        if (start) {
            snakeStore.setStart(true)
            snakeStore.setEnd(false)
            interval = setInterval(() => {
                move()
            }, 150)
        }
        return () => clearInterval(interval)
    }, [start])

    useEffect(() => {
        window.addEventListener("keydown", prohibitScroll)
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keydown", prohibitScroll)
            restart()
        };
    }, []);

    return (<div className="the-snake">
        <section className={"snake-field"}>
            <CreateField snake={snakeStore.snake} apple={snakeStore.apple}/>
        </section>
        {snakeStore.end ? <section onClick={() => setStart(true)}>
                <button>restart</button>
            </section>
            : (snakeStore.start) ? <></> : <section onClick={() => setStart(true)}>
                <button>start</button>
            </section>
        }

    </div>)
})