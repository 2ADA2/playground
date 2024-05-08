import {CreateField} from "./createField";
import "./styles/snake.css";
import "./styles/snakeAnimation.css"
import {useEffect, useRef, useState} from "react";
import {prohibitScroll} from "../TTFE/comopnents/finctions/prohibitScroll";
import snakeStore from "./snakeStore";
import {observer} from "mobx-react-lite";
import {createApple} from "./createApple";
import {isArraysEqual} from "../../functions/checkArrays";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple, faGoogle, faWikipediaW, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faPeopleArrows, faStar} from "@fortawesome/free-solid-svg-icons";
import {BlockLink} from "../../components/link";

export const TheSnake = observer(() => {
    const [start, setStart] = useState(snakeStore.start)

    const handleKeyDown = (e) => {
        if (!snakeStore.start) return
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
        snakeStore.setSnake([[5, 10], [6, 10]])
        snakeStore.setApple(createApple([[5, 10], [6, 10]]))
        snakeStore.setApples(0)
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
            snakeStore.setApples(snakeStore.apples + 1)
            if(snakeStore.apples > snakeStore.record){
                localStorage.setItem("snake-record", snakeStore.apples)
                snakeStore.setRecord(snakeStore.apples)
            }
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

    return (
        <div className="the-snake">
            <section className={"snake-header-container"}>
                <section className={"snake-header-background"}>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                    <div className={"snake-header-anim"}></div>
                </section>
                <div className={"snake-header"}>
                    <h2>The snake</h2>
                    <span>Классическая змейка</span>
                </div>
            </section>

            <section className={"snake-links"}>
                <span className={"links-header"}>полезные ссылки</span>
                <BlockLink
                    link="https://www.youtube.com/watch?time_continue=1&v=D4CZL5tIC-w&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%25D0%25BA%25D0%25B0%25D0%25BA%2B%25D0%25B2%25D1%258B%25D0%25B8%25D0%25B3%25D1%2580%25D0%25B0%25D1%2582%25D1%258C%2B%25D0%25B2%2B%25D0%25B7%25D0%25BC%25D0%25B5%25D0&source_ve_path=MzY4NDIsMjg2NjY&feature=emb_logo"
                    elem={<FontAwesomeIcon icon={faYoutube}/>}
                    header={"Как выиграть"}
                    text={"посмотрите обучающий ролик"}/>
                <BlockLink
                    link={"https://ru.wikipedia.org/wiki/%D0%97%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0_(%D0%B8%D0%B3%D1%80%D0%B0)"}
                    elem={<FontAwesomeIcon icon={faWikipediaW}/>}
                    header={"Вся информация"}
                    text={"Узнайте историю игры и прочую информацию"}
                />
                <BlockLink
                    link={"https://www.google.com/search?q=%D0%B7%D0%BC%D0%B5%D0%B9%D0%BA%D0%B0+%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD&oq=pvtqrf&gs_lcrp=EgZjaHJvbWUqDwgCEAAYChiDARixAxiABDIGCAAQRRg5Mg8IARAAGAoYgwEYsQMYgAQyDwgCEAAYChiDARixAxiABDIJCAMQABgKGIAEMgkIBBAAGAoYgAQyCQgFEAAYChiABDIJCAYQABgKGIAEMgkIBxAAGAoYgAQyCQgIEAAYChiABDIJCAkQLhgKGIAE0gEIMjQzOGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"}
                    elem={<FontAwesomeIcon icon={faGoogle}/>}
                    header={"Играть в Google"}
                    text={"можете протестировать версию от гугла"}
                />
                <BlockLink
                    link={"https://snake.io/"}
                    elem={<FontAwesomeIcon icon={faPeopleArrows}/>}
                    header={"Играть онлайн"}
                    text={"snake.io тоже у всех ассоциируется со змейкой..."}
                />
            </section>

            <section className={"snake-info-container"}>
                <div className={"snake-info"}>
                    <FontAwesomeIcon icon={faApple}/>
                    <span>{snakeStore.apples}</span>
                </div>
                <div className={"snake-info"}>
                    <FontAwesomeIcon icon={faStar}/>
                    <span>{snakeStore.record}</span>
                </div>
            </section>

            <section className={"snake-field"}>
                <CreateField snake={snakeStore.snake} apple={snakeStore.apple}/>
            </section>

            <div className={"modal-container"}>
                {snakeStore.end ?
                    <section
                        onClick={() => setStart(true)}
                        className={"snake-modal"}
                    >
                        <button>restart</button>
                    </section>
                    : (snakeStore.start) ? <></> :
                        <section
                            onClick={() => setStart(true)}
                            className={"snake-modal"}
                        >
                            <button>start</button>
                        </section>
                }
            </div>

            <section className={"mine-rules snake-rules"}>
                <h3>Как играть</h3>
                <p>
                    Управляйте стрелочками и меняйте направление движения змейки
                    ваша задача съесть как можно больше яблок, возможно даже победите)
                </p>
                <p>
                    Вы имеете поле 20 на 20, т.е. вам надо собрать всего 398 яблок чтобы победить ),
                    есть тактики для победы, в полезных ссылках можете поискать.
                </p>
            </section>
        </div>)
})