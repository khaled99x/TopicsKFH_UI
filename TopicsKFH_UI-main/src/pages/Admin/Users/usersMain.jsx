import { Grid, ButtonGroup, Button } from "@mui/material";
import Header from "../../../components/header";
import TopBar from "../../../components/topbar";
import { useNavigate } from "react-router-dom";

export default function UsersMain(){
    let navigate = useNavigate();
              const toAddUser = () =>{
                let path = `/add-user`;
                navigate(path);
              }
              const toRemoveUser = () =>{
                let path = `/remove-user`;
                navigate(path);
              }
              const toEditUser = () =>{
                let path = `/edit-role`;
                navigate(path);
              }

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
                    <Button variant="contained" type="submit" color="success" onClick={toAddUser}>
                        ADD USER
                    </Button>
                    <Button variant="contained" type="submit" color="success" onClick={toRemoveUser}>
                        REMOVE USER
                    </Button>
                    <Button variant="contained" type="submit" color="success" onClick={toEditUser}>
                       EDIT ROLES
                    </Button>
                    
                </Grid>
            </Grid>            
        </>
    );
}