import { Grid, ButtonGroup, Button } from "@mui/material";
import Header from "../../../components/header";
import TopBar from "../../../components/topbar";

export default function UsersMain(){
    return (
        <>
            <Header/>
            <TopBar/>
            <Grid
                container
                justifyContent="center"
                height="calc(100vh - 200px)"
            >               
                <Grid item xs={11} md={6} sx={{display:"flex",justifyContent:"center", flexDirection: "column" }}>
                    <Button variant="contained" type="submit" color="success">
                        ADD USER
                    </Button>
                    <Button variant="contained" type="submit" color="success">
                        REMOVE USER
                    </Button>
                    <Button variant="contained" type="submit" color="success">
                       EDIT ROLES
                    </Button>
                    
                </Grid>
            </Grid>            
        </>
    );
}