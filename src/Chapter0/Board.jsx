import { Box } from "@mui/material";
import Square from "./Square";

export default function Board({gamePlay, count, data, winner}){
    const squareData = data;

    function handleClick (key){
        if(squareData[key] || winner===true){
            return;
        }else{
            squareData[key] = count%2 === 0 ? "X" : "O";
            gamePlay(squareData);
        };
       
    };

    return (
        <>  
            <Box>
                <Box>
                    <Square value={squareData[0]} squareClick={() => handleClick(0)}/>
                    <Square value={squareData[1]} squareClick={() => handleClick(1)}/>
                    <Square value={squareData[2]} squareClick={() => handleClick(2)}/>
                </Box>
                <Box>
                    <Square value={squareData[3]} squareClick={() => handleClick(3)}/>
                    <Square value={squareData[4]} squareClick={() => handleClick(4)}/>
                    <Square value={squareData[5]} squareClick={() => handleClick(5)}/>
                </Box>
                <Box>
                    <Square value={squareData[6]} squareClick={() => handleClick(6)}/>
                    <Square value={squareData[7]} squareClick={() => handleClick(7)}/>
                    <Square value={squareData[8]} squareClick={() => handleClick(8)}/>
                </Box>
            </Box>
        </>
    );
};