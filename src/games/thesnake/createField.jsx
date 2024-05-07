export const CreateField = ({snake,apple}) => {
    function CreateRow({snake, y, apple}) {
        const row = []
        for (let x = 0; x < 20; x++) {
            for (let i in snake) {
                let gradient = 200-i;
                let bg = `rgb(${gradient}, 255, 158)`

                if (snake[i][1] === y && snake[i][0] === x) row.push(
                    <td
                        className={"snake snake-" + i}
                        style={{backgroundColor: bg}}
                    ></td>)
            }
            if (apple[1] === y && apple[0] === x) row.push(<td className={"apple"}></td>)
            if (row.length <= x) row.push(<td className={"empty"}></td>)
        }
        return <tr>{row}</tr>
    }

    function CreateRows(){
        const rows = []
        for (let y = 0; y < 20; y++) {
            rows.push(<CreateRow apple={apple} y={y} snake = {snake}/>)
        }
        return rows
    }

    return (
        <table>
            <CreateRows/>
        </table>
    )
}