// import Header from "../Header";
import Game from "../Chapter0/Game";
import {Box} from "@mui/material";

export default function Chapter0 () {
    return (
        <>
            {/* <Header /> */}
            <Box sx={{display:"flex",flexDirection:"column",textAlign:"center",width:"50%",margin:"auto"}}>
                <Game />
            </Box>
        </>
    );
};