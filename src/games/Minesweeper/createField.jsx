import {isArraysEqual} from "../../functions/checkArrays";
import {checkMines} from "./checkMines";

export const CreateField = ({mines, opened, detected}) => {
    let field = []
    for(let y = 0; y < 15; y++) {
        let row = []
        yScale: for(let x = 0; x < 20; x++) {
            let count = 0
            for(let mine of mines) {
                if(isArraysEqual([x,y], mine)) {
                    row.push(<td>m</td>)
                    count = 0
                    continue yScale
                }
                if(checkMines(x,y,mine)) {
                    // console.log(x + ":" + y + "   :   "+mine + "        = "+ (count+1)  )
                    count += 1;
                }

            }
            row.push(<td>{count || ""}</td>)
            count = 0
        }
        field.push(<tr>{row}</tr>)
    }
    return (
        <table className={"mine-field"}>
            {field}
        </table>
    )
}
