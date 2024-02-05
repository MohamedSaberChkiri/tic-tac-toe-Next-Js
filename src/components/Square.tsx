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
        return <Button  onClick={onClick} disabled={Boolean(winner)} className="h-full w-full "></Button>
    }
    return <Button disabled className="h-full w-full text-7xl flex items-center justify-center text-white">{value}</Button>
}

export default Square