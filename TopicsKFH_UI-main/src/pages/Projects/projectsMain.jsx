import { Grid, ButtonGroup, Button } from "@mui/material";
import Header from "../../components/header";
import TopBar from "../../components/topbar";
import { useNavigate } from "react-router-dom";

export default function ProjectsMain(){
    let navigate = useNavigate();
              const toUploadProject = () =>{
                let path = `/upload-project`;
                navigate(path);
              }
              const toViewAllProjects = () =>{
                let path = `/view-project`;
                navigate(path);
              }

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
                    <Button variant="contained" type="submit" color="success" onClick={toUploadProject}>
                        UPLOAD PROJECT
                    </Button>
                    <Button variant="contained" type="submit" color="success" onClick={toViewAllProjects}>
                        VIEW ALL PROJECT
                    </Button>
                    
                </Grid>
            </Grid>            
        </>
    );
}