import { Grid, Button, Typography,FormControl, InputLabel, Select,MenuItem,FormGroup } from "@mui/material";
import Header from "../../../components/header";
import TopBar from "../../../components/topbar";
import CustomRadioButton from "../../../components/customRadioButton";

export default function EditRole(){
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
                <Grid item  xs={11} md={6} px={4} py={2} sx={{display:"flex",backgroundColor: "#d9d9d9",borderRadius:"20px" }}>                    
                    <form style={{width:"100%"}}>
                        <Typography my={1} align="left" variant="subtitle1">
                            SELECT USER
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
                        <Typography mb={1} mt={2} align="left" variant="subtitle1">
                            ROLES
                        </Typography>
                        <FormGroup sx={{ml:4}}>
                            <div className="control-group">
                                <CustomRadioButton name="userrole" title="Developer"></CustomRadioButton>
                                <CustomRadioButton name="userrole" title="Tester"></CustomRadioButton>
                                <FormControl variant="filled" sx={{ ml: 4,mb:2, width: "40%",bgcolor:"white" }} >
                                    <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
                                    <Select                                    
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value=""
                                        label="Select Team"
                                        onChange=""
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <CustomRadioButton name="userrole" title="Business"></CustomRadioButton>
                                <FormControl variant="filled" sx={{ ml: 4, width: "40%",bgcolor:"white" }} >
                                    <InputLabel id="demo-simple-select-label">Select Business</InputLabel>
                                    <Select                                    
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value=""
                                        label="Select Business"
                                        onChange=""
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            
                        </FormGroup>
                        <Grid item  sx={{display:"flex", justifyContent:"end"}}>
                            <Button variant="contained" type="submit" color="warning">
                                EDIT
                            </Button>
                        </Grid>
                        
                    </form>
                </Grid>
            </Grid>            
        </>
    );
}