"use client"

import Square from "@/components/Square";
import { useState } from "react";
import '../app/globals.css'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState(null);

  const setSquareValue = (index: number) => {
    const newData = squares.map((val, i)=>{
        if(i === index){
            return currentPlayer
        }
        return val
    })

    setSquares(newData)
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
  };

  return (
    <div className=" w-[400px] h-[400px] grid grid-rows-3 grid-cols-3 gap-2 mx-auto mt-[200px]">
      {Array(9).fill(null).map((_, i) => {
        return (
          <Square
                key={i}
                onClick={() => setSquareValue(i)}
                winner={winner} 
                value={squares[i]}            
          />
        );
      })}
    </div>
  );
}
