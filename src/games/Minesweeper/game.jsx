import {CreateField} from "./createField";
import "./mines.css"
import {useEffect, useState} from "react";
import {createMines} from "./createMines";

export const Minesweeper = () => {
    const [mines, setMines] = useState([])
    useEffect(() => {
        setMines(createMines())
    }, []);
    return (
        <CreateField mines={mines}/>
    )
}
