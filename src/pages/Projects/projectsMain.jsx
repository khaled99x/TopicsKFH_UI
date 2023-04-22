import { Grid, ButtonGroup, Button } from "@mui/material";
import Header from "../../components/header";
import TopBar from "../../components/topbar";

export default function ProjectsMain(){
    return (
        <>
            <Header />
            <TopBar />
            <Grid
                container
                justifyContent="center"
                height="calc(100vh - 200px)"
            >               
                <Grid xs={11} md={6} item sx={{display:"flex",justifyContent:"center", flexDirection: "column"}}>
                    <Button variant="contained" type="submit" color="success">
                        UPLOAD PROJECT
                    </Button>
                    <Button variant="contained" type="submit" color="success">
                        VIEW ALL PROJECT
                    </Button>
                    
                </Grid>
            </Grid>            
        </>
    );
}