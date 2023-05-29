import { Grid, Paper, TextField, Button, Typography, Link } from "@mui/material";
import Header from "../components/header";
import TopBar from "../components/topbar";


export default function Login(){
    return (
        <>
            <Header />
            <TopBar />
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                height="calc(100vh - 200px)"
            >               
                <Grid item >
                    <Typography   variant="h3" sx={{ flexGrow: 1, textAlign: 'center', marginTop: '10px', marginBottom: '20px'}}>
                        LOGIN
                    </Typography>
                    <form>
                        <TextField
                            className="customBorder bordersuccess"
                            id="username"
                            label="USERNAME"
                            variant="outlined"
                            margin="normal"
                            color="success"
                            fullWidth                        
                        />
                        <TextField
                            className="customBorder bordersuccess"
                            id="password"
                            label="PASSWORD"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            color="success"
                            sx={{borderColor: "#128754"}}
                            fullWidth

                        />
                        <Grid item>
                            <Link href="#" color="#128754" underline="none" sx={{display:"flex", justifyContent:"start",marginBottom: "1rem"}}>
                                Forget Password
                            </Link>
                        </Grid>
                        
                        <Grid item  sx={{display:"flex", justifyContent:"end"}}>
                            <Button variant="contained" type="submit" color="success">
                                SIGN IN
                            </Button>
                        </Grid>
                        
                    </form>
                </Grid>
            </Grid>            
        </>
    );
}