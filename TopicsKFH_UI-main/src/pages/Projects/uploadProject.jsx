import { Grid, ButtonGroup, Button } from "@mui/material";
import Header from "../../components/header";
import TopBar from "../../components/topbar";
import { useNavigate } from "react-router-dom";

export default function UploadProject(){
    let navigate = useNavigate();
              const toIOSUploads = () =>{
                let path = `/upload-ios`;
                navigate(path);
              }
              const toAndroidUploads = () =>{
                let path = `/upload-android`;
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
                    <Button variant="contained" type="submit" color="success" onClick={toIOSUploads}>
                        IOS APPLICATION
                    </Button>
                    <Button variant="contained" type="submit" color="success" onClick={toAndroidUploads}>
                        ANDROID APPLICATION
                    </Button>
                    
                </Grid>
            </Grid>            
        </>
    );
}