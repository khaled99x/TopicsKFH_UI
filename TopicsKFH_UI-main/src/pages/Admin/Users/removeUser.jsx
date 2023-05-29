import { Grid, Paper, TextField, Button, Typography, RadioGroup, Radio,FormControlLabel,FormControl, InputLabel, Select,MenuItem } from "@mui/material";
import Header from "../../../components/header";
import TopBar from "../../../components/topbar";


export default function RemoveUser(){
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
                <Grid item xs={11} md={6} px={4} py={2} sx={{display:"flex",backgroundColor: "#d9d9d9",borderRadius:"20px" }}>                    
                    <form style={{width:"100%"}}>
                        <Typography my={1} align="left" variant="subtitle1">
                            REMOVE USER
                        </Typography>
                        <FormControl variant="filled" sx={{ mb:4, width: "50%",bgcolor:"white",display: "flex" }} >
                            <InputLabel id="demo-simple-select-label">Select User</InputLabel>
                            <Select                                    
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value=""
                                label="Select User"
                                onChange=""
                            >
                                <MenuItem value={10}>a</MenuItem>
                                <MenuItem value={20}>b</MenuItem>
                                <MenuItem value={30}>c</MenuItem>
                            </Select>
                        </FormControl>
                            
                        <Grid item  sx={{display:"flex", justifyContent:"end"}}>
                            <Button variant="contained" type="submit" color="warning">
                                REMOVE
                            </Button>
                        </Grid>
                        
                    </form>
                </Grid>
            </Grid>            
        </>
    );
}