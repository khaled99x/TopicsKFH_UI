import { Grid, Paper, TextField, Button, Typography, RadioGroup, Radio,FormControlLabel,FormControl, InputLabel, Select,MenuItem, TextareaAutosize, Divider, Link } from "@mui/material";
import Header from "../../components/header";
import TopBar from "../../components/topbar";



export default function CommentBox(){
    return (
        <>
            <Header></Header>
            <TopBar></TopBar>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                height="calc(100vh - 200px)"
            >               
                <Grid item xs={11} md={6} px={4} py={2} sx={{display:"flex", backgroundColor: "#d9d9d9",borderRadius:"20px" }}>                    
                    <form style={{width:"100%",marginBottom:"1rem"}}>
                        <Typography my={1} align="left" variant="subtitle1">
                            ADD COMMENT
                        </Typography>
                        <TextField
                            label="COMMENT"
                            multiline
                            variant="filled"
                            rows={7}
                            style={{ width: '100%',backgroundColor:'white'}}
                        />
                        <Link href="#" mt={2} align="right" underline="none" sx={{ display:"flex", justifyContent:"end"}}>SUBMIT</Link>
                        
                        <div style={{margin:"30px 0px"}}>
                            <Divider style={{borderWidth: "2px" }}></Divider>
                        </div>
                        
                        <Typography mb={1} mt={2} align="left" variant="subtitle1">
                            User
                        </Typography>
                        <TextField
                            id="comment"
                            label="COMMENT"
                            variant="filled"
                            margin="normal"
                            color="success"
                            sx={{ bgcolor: "white",width:"100%",display:"flex"}}
                            fullWidth                        
                        />
                        <Link href="#" mt={2}  align="right" underline="none" sx={{ display:"flex", justifyContent:"end"}}>REPLY</Link>                        
                    </form>
                </Grid>
            </Grid>            
        </>
    );
}