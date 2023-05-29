import { Grid, ButtonGroup, Button } from "@mui/material";
import Header from "../../components/header";
import TopBar from "../../components/topbar";
import { useNavigate } from "react-router-dom";


export default function TesterMain(){
let navigate = useNavigate();
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
                <Grid item xs={11} md={6} sx={{display:"flex",justifyContent:"center", flexDirection: "column"}}>
                    <Button variant="contained" type="submit" color="success" onClick={toIOSDownloads}>
                        IOS DOWNLOADS
                    </Button>
                    <Button variant="contained" type="submit" color="success" onClick={toIOSDownloads}>
                        ANDROID DOWNLOADS
                    </Button>
                    
                </Grid>
            </Grid>            
        </>
    );
}