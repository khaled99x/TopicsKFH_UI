import { Grid, ButtonGroup, Button } from "@mui/material";
import Header from "../../components/header";
import TopBar from "../../components/topbar";

export default function TesterMain(){
    return (
        <>
            <Header />
            <TopBar />
            <Grid
                container
                justifyContent="center"
                height="calc(100vh - 200px)"
            >               
                <Grid item xs={11} md={6} sx={{display:"flex",justifyContent:"center", flexDirection: "column"}}>
                    <Button variant="contained" type="submit" color="success">
                        IOS DOWNLOADS
                    </Button>
                    <Button variant="contained" type="submit" color="success">
                        ANDROID DOWNLOADS
                    </Button>
                    
                </Grid>
            </Grid>            
        </>
    );
}