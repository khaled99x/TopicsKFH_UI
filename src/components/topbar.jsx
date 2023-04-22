import { Select,MenuItem, Toolbar, Typography, Grid,FormControl, InputLabel } from "@mui/material";
import logo from '../assets/images/logo.jpeg';
import { useLocation } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

export default function TopBar()
{
    const location = useLocation();

    function shouldDisplaySelect() {
        return location.pathname === '/login';
    }

    return (
        <>
            
            {!shouldDisplaySelect() && (
                <Grid container pt={1}>
                    <Grid item xs={4} md={5} pl={2} sx={{display:"flex",alignItems:"center"}}>
                        <PersonIcon color="primary"/>
                        <FormControl variant="filled" sx={{ display:"flex", ml: 1,bgcolor:"white" }} >
                            
                            <Select    
                                className="noborder"                                
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value="10"
                                sx={{backgroundColor:"white"}}
                            >
                                <MenuItem value={10}>User</MenuItem>
                                <MenuItem value={20}>Tester</MenuItem>
                                <MenuItem value={30}>Developer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8} md={7}>
                        <Toolbar>
                            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left' }}>
                                <img src={logo} className="App-logo" alt="logo" />
                            </Typography>
                        </Toolbar>
                    </Grid>
                </Grid>
                
                
            )}
            {shouldDisplaySelect() && (
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Typography>
                </Toolbar>
            )}
        </>
    );
}