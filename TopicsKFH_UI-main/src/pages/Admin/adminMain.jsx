import { Grid, ButtonGroup, Button } from "@mui/material";
import Header from "../../components/header";
import TopBar from "../../components/topbar";
import { useNavigate } from "react-router-dom";

export default function AdminMain(){
    let navigate = useNavigate();
          const toUserManagement = () =>{
            let path = `/user`;
            navigate(path);
          }
          const toProjects = () =>{
            let path = `/project`;
            navigate(path);
          }
          const toIOSDownloads = () =>{
            let path = `/view-ios-list`;
            navigate(path);
          }
          const toAndroidDownloads = () =>{
            let path = `/view-android-list`;
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
                <Grid item xs={11} md={6} sx={{display:"flex",justifyContent:"center", flexDirection: "column",}}>
                    <Button variant="contained" type="submit" color="success" onClick={toUserManagement}>
                        USER MANAGEMENT
                    </Button>
                    <Button variant="contained" type="submit" color="success" onClick={toProjects}>
                        PROJECTS
                    </Button>
                    <Button variant="contained" type="submit" color="success" onClick={toIOSDownloads}>
                        IOS DOWNLOADS
                    </Button>
                    <Button variant="contained" type="submit" color="success" onClick={toAndroidDownloads}>
                        ANDROID DOWNLOADS
                    </Button>
                    
                </Grid>
            </Grid>            
        </>
    );
}