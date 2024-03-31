import { Button } from "@mui/material";

export default function Square ({value, squareClick}){

    const squareStyle = {
        border:"1px solid black",
        borderRadius:"0px",
        width:"80px",
        height:"80px",
        margin: "0px",
        padding:"0px",
        fontSize:"40px",
        fontWeight:"bold",
        color:"black",
    };

    return (
        <>
            <Button sx={squareStyle} onClick={squareClick}>{value}</Button>
        </>
    );
};