import { Button } from "./ui/button"

type Player = "X" | "O" | null




function Square({
    value, onClick, winner
}:{
    winner : string | null,
    value : Player,
    onClick : ()=> void
}){
    if(!value){
        return <Button  onClick={onClick} disabled={Boolean(winner)} ></Button>
    }
    return <Button disabled>{value}</Button>
}

export default Square