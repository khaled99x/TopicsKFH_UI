import { Grid, Typography, TextField, Button, Stack, Box, FormGroup, FormControlLabel, Checkbox,Card,CardContent} from "@mui/material";
import Header from "../../components/header";
import TopBar from "../../components/topbar";
import CustomCheckbox from "../../components/customCheckbox";

export default function EditIOS()
{
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
                    <form style={{width:"100%"}}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={7} >                        
                                <Typography my={1} align="left" variant="subtitle1">
                                    IOS UPLOAD
                                </Typography>
                                <TextField
                                    className="customBorder"
                                    id="email"
                                    label="ENTER RELEASE NAME"
                                    type="email"
                                    variant="outlined"
                                    color="success"
                                    fullWidth                        
                                />
                                <Typography my={1} align="left" variant="subtitle1">
                                    RELEASE DESCRIPTION
                                </Typography>
                                <TextField
                                    label="ENTER DESCRIPTION"
                                    multiline
                                    variant="filled"
                                    rows={7}
                                    style={{ width: '100%',backgroundColor:'white'}}
                                />
                                <Typography my={1} align="left" variant="subtitle1">
                                    SIT SERVER
                                </Typography>
                                <TextField
                                    className="customBorder"
                                    id="email"
                                    type="email"
                                    variant="outlined"
                                    color="success"
                                    fullWidth                        
                                />                                
                            </Grid>
                            <Grid item xs={12} md={5} >
                                <Typography my={1} align="center" variant="subtitle1">
                                    VISIBILITY
                                </Typography> 
                                <Card 
                                    sx={{
                                        width: "100%",                                        
                                        maxHeight:"51vh",
                                        overflowX: "auto",
                                        backgroundColor: '#f0f0f0',
                                        borderRadius: "15px",                  
                                    }}
                                >
                                    <CardContent sx={{                                        
                                        maxHeight:"51vh",
                                        overflowX: "auto",
                                        backgroundColor: '#f0f0f0',
                                        borderRadius: "15px", 
                                        paddingRight: "20px"                 
                                    }}>
                                        <FormGroup sx={{ padding: '10px 30px' }}>
                                            <div className="control-group">
                                                <CustomCheckbox title="Team 1"/>                                                
                                                <CustomCheckbox title="Team 2"/>                                                
                                                <CustomCheckbox title="Team 3"/>                                                
                                                <CustomCheckbox title="Team 4"/>                                                
                                                <CustomCheckbox title="Team 5"/>                                                
                                                <CustomCheckbox title="Business 1"/>                                                
                                                <CustomCheckbox title="Business 2"/> 
                                                <CustomCheckbox title="Business 3"/>   
                                                <CustomCheckbox title="Business 4"/>    
                                                <CustomCheckbox title="Business 5"/>    
                                                <CustomCheckbox title="Business 6"/>                                              
                                                <CustomCheckbox title="Business 7"/>    
                                            </div>                       
                                        </FormGroup>
                                    </CardContent>
                                    </Card>                                
                            </Grid>
                            <Grid item xs={8} md={6}>
                                <Stack direction="row" mt={2} spacing={4}  alignItems="flex-start">
                                    <Button variant="contained" type="submit" color="success">Upload APK</Button>
                                    <Button variant="contained" type="submit" color="success">Upload API</Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={4} md={6}>
                                <Stack direction="row" mt={2} sx={{justifyContent:"end"}}>
                                    <Button variant="contained" type="submit" color="warning">Upload</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                        
                    </form>
                </Grid>

            </Grid>
        </>
    );
}