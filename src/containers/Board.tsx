"use client"
import Square from "@/components/Square";
import { useEffect, useState } from "react";
import '../app/globals.css'
import { Button } from "@/components/ui/button";
type Player = "X" | "O" | "BOTH" | null

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player>(null);

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


  function reset(){
    setSquares(Array(9).fill(null))
    setWinner(null)
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O")
  }

  function getWinner(squares: Player[]){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let i=0; i<lines.length; i++){
      const [a,b,c] = lines[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
      }
    }
    return null
  }

    useEffect(()=>{
      const w = getWinner(squares)
      if(w){
        setWinner(w)
      }
      if(!w && !squares.filter((square) => !square).length) {
        setWinner("BOTH")
      }
    })


  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-6 mt-[200px]">
      <p className="text-white">Hey '{currentPlayer}' , it's your turn</p>
      {winner && winner !== "BOTH" && <p className="text-white">Congratulations {winner}</p> }
      {winner && winner === "BOTH" && <p className="text-white">No one wins !</p>}


    <div className=" w-[400px] h-[400px] grid grid-rows-3 grid-cols-3 gap-2 mx-auto ">
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

    <Button onClick={reset} className="">Reset</Button>

    </div>
  );
}
