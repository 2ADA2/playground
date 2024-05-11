import {useEffect, useState} from "react";
import {Field} from "./comopnents/finctions/createField"
import "./styles/gamestyle.css";
import { calcField } from "./comopnents/finctions/calculateField";
import store from "./store/store"
import { observer } from "mobx-react-lite";
import { spawn } from "./comopnents/finctions/spawn";
import { LoseModal } from "./comopnents/layouts/loseModal";
import { ControlPanel } from "./comopnents/layouts/controlPanel";
import { prohibitScroll } from "./comopnents/finctions/prohibitScroll";
import { BlockLink } from "../../components/link";
import { checkMoves } from "./comopnents/finctions/checkMoves";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";

export const Game2048 = observer(() => {
    const field = JSON.parse(JSON.stringify(store.field));
    const end = ((!checkMoves(field)) || store.end);

    useEffect(() => {
        const interval = setInterval(() => {
            store.setTime()
        },1000)
        return() => {
            clearInterval(interval)
        }
    }, []);

    function handleKeyDown(e){
        const codes = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
        const index = codes.indexOf(e.code);
        if (index + 1) {
            store.cleanField();
            setTimeout(() => {
                const oldField = JSON.parse(JSON.stringify(store.field));
                const newField = calcField(oldField, index);
                store.updateField(newField);
            }, 10)
        }
    }

    useEffect(() => {
        const empty = [[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]];
        if(JSON.stringify(field) === JSON.stringify(empty)){
            setTimeout(()=>{
                const newField = spawn(field);
                store.updateField(spawn(newField));                  
            },10)  
        }
        window.addEventListener("keydown", prohibitScroll)
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keydown", prohibitScroll)
            store.cleanField()
        };
    },[]);

    const git = <svg height="32" fill="white" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>

    return (

    <>
        <section>
            <div className={"global-2048-background"} style={{height:"2000px"}}>

            </div>
            <div className="game-2048-header">
                <div className={"game2048-header-block"}></div>
                <div className={"game2048-header-block"}></div>
                <div className={"game2048-header-block"}></div>
                <div className={"game2048-header-block"}></div>
                <div className={"game2048-header-block"}></div>
                <div className={"game2048-header-block"}></div>
                <div className={"game2048-header-block"}></div>
                <div className={"game2048-header-block"}></div>
                <div className={"game2048-header-block"}></div>
                <div className={"game2048-header-block"}></div>
                <div className={"game2048-header-block"}></div>
                <h1>2048 Game</h1>
            </div>
        </section>
        <section className="filler">
            <h2>Полезные ссылки</h2>
            <BlockLink
                elem={git}
                link="https://github.com/Arsenijpotap"
                header="Виновник 2048"
                text="GitHub Арсения Потапченко"/>

            <BlockLink
                elem={git}
                link="https://github.com/2ADA2"
                header="Мой GitHub"
                text="Может, тут есть что-то интересное?"/>

            <BlockLink
                link="https://play2048.co/"
                url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png"
                header="2048"
                text="Играйте в 2048 на официальном сайте"/>

            <BlockLink
                elem={<FontAwesomeIcon icon={faReact}/>}
                link="https://react.dev/"
                url="./static/react.png"
                header="React"
                text="Проект Playground разработан на React"/>

        </section>

        <div className="game">
            {(end) ? <LoseModal></LoseModal>:<></>}
            <div className = "game-container">
                <ControlPanel/>
                <Field mass = {field}></Field>                 
            </div>

        </div>

        <section className="rules-container">
            <h2>Как играть</h2>
            <p>Используйте стрелки на вашей клавиатуре чтобы делать ходы. Попробуйте собрать плитку с числом 2048! (можете и больше)</p>
        </section>
    </>

    );
})