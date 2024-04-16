
export const EndModal = ({winner, restart}) => {
    return (
        <div className = "end-modal">
            <h2>Игра окончена!</h2>
            {winner !== "nobody" ? <h3>победитель: {winner}</h3>:<h3>Ничья</h3>}
            <button onClick = {() => restart()}>try again</button>
        </div>
    )
}