import React, { useState } from 'react';
import { FaChessKing } from "react-icons/fa";

function Chessboard() {
    const [knightPosition, setKnightPosition] = useState([3, 4]);

    function handleSquareClick(x, y) {
        setKnightPosition([x, y]);
    }

    function getPossibleMoves(x, y) {
        const possibleMoves = [];
        const movements = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
        for (let i = 0; i < movements.length; i++) {
            const newX = x + movements[i][0];
            const newY = y + movements[i][1];
            if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
                possibleMoves.push([newX, newY]);
            }
        }
        return possibleMoves;
    }
    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column" }}>
            <h1>Assignment 2</h1>
            <h3>the position of a Knight as an input on an 8x8
                chessboard.</h3>
            <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap", width: "320px" }}>
                {Array(8).fill(null).map((row, x) => (
                    <div key={x} style={{ display: "flex" }}>
                        {Array(8).fill(null).map((square, y) => {
                            let color = (x + y) % 2 === 0 ? "white" : "rgb(255,140,0)";
                            return (
                                <div key={y} style={{ backgroundColor: color, width: "40px", height: "40px", border: "1px solid #000" }} onClick={() => handleSquareClick(x, y)}>

                                    {x === knightPosition[0] && y === knightPosition[1] ? <FaChessKing style={{ fontSize: '30px', marginTop: '3px', marginLeft: '4px' }} /> : ''}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: 'center', padding: '20px', border: "1px solid black", margin: '20px' }}>
                <label style={{ fontSize: '21px', fontWeight: '700', wordSpacing: '7px', letterSpacing: '4px' }}>   Possible moves: </label>
                <div>

                    {getPossibleMoves(knightPosition[0], knightPosition[1]).map(move => `(${move[0]},${move[1]})`).join(', ')}
                </div>
            </div>
        </div>
    );
}

export default Chessboard;