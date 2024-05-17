import { useState } from "react";
import styles from "./TicTacToe.module.css";

// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
    return (
        <button className={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default function Board() {
    const [isXNext, setIsXNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    }
    else {
        status = "Next player: " + (isXNext ? "X" : "O");
    }
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (isXNext === true) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        setSquares(nextSquares);
        setIsXNext(!isXNext);
    }

    return (
        <>
            <div className={styles.gameWrapper}>
                <div className={styles.stats}>{status}</div>
                <div className={styles.boardRow}>
                    <Square
                        onSquareClick={() => handleClick(0)}
                        value={squares[0]}
                    />
                    <Square
                        onSquareClick={() => handleClick(1)}
                        value={squares[1]}
                    />
                    <Square
                        onSquareClick={() => handleClick(2)}
                        value={squares[2]}
                    />
                </div>
                <div className={styles.boardRow}>
                    <Square
                        onSquareClick={() => handleClick(3)}
                        value={squares[3]}
                    />
                    <Square
                        onSquareClick={() => handleClick(4)}
                        value={squares[4]}
                    />
                    <Square
                        onSquareClick={() => handleClick(5)}
                        value={squares[5]}
                    />
                </div>
                <div className={styles.boardRow}>
                    <Square
                        onSquareClick={() => handleClick(6)}
                        value={squares[6]}
                    />
                    <Square
                        onSquareClick={() => handleClick(7)}
                        value={squares[7]}
                    />
                    <Square
                        onSquareClick={() => handleClick(8)}
                        value={squares[8]}
                    />
                </div>
                <button
                    onClick={() => {
                        setSquares(Array(9).fill(null));
                        setIsXNext(true);
                    }}
                >
                    Reset
                </button>
            </div>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
