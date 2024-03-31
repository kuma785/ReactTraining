import {Box, Typography, Button} from "@mui/material";
import Board from "./Board";
import Judge from "./Judge";
import { useState } from "react";

export default function Game(){
    const [currentMove,setCurrentMove] = useState(0);
    const [history,setHistory ]= useState([Array(9).fill(null)]);
    const squares = [...history[currentMove]];
    const [winner,setWinner] = useState(false);

    function record (squareData) {
        setCurrentMove(currentMove +1);
        setHistory([...history.slice(0,currentMove +1 ),squareData]);
    };

    function moving (b) {
        setCurrentMove(b);
        setWinner(false);
    };

    function judge (){
        setWinner(true);
    };

    return (
        <>
            <Typography sx={{m:"30px",fontSize:"30px",fontWeight:"bold"}}>三目並べ</Typography>
            <Typography sx={{m:"30px",fontSize:"20px",fontWeight:"bold"}}>{winner===true ? "Winner" : "Next Player"}: {currentMove%2 === 0 ? "X" :"O"}</Typography>
            <Box sx={{display:"flex",justifyContent:"space-around"}}>
                <Board gamePlay={(squareData) => record(squareData)} count={currentMove} data={squares} winner={winner}/>
                <Box component="ol">
                     {history.map((a,b) => {
                        return (
                            <Box component="li" sx={{fontSize:"30px",margin:"0px"}}>
                                <Button size="small" variant="contained" sx={{fontSize:"15px"}} onClick={() => moving(b)}>
                                    {b===0 ? "Go to game start" : "Go to move #"+b}
                                </Button>
                            </Box> 
                        );
                    })}
                </Box>
                <Judge data={squares} judge={() => {judge()}}/>
            </Box>
            
        </>
    )
};
