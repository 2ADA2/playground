import { calcField } from "./calculateField";
export const checkMoves = (field) => {
    const newField = field.slice().map(row => row.map(e => parseInt(e)));
    for (let i=-1;i<5;i++){
        if (JSON.stringify(newField) !== JSON.stringify(calcField(newField,i, false))) {
            return true
        }
    }
    return false
}