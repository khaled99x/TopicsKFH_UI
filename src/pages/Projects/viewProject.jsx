import { Grid, ButtonGroup, Button,TableContainer,Table, TableHead, TableBody, TableRow, TableCell, Paper, Link } from "@mui/material";
import Header from "../../components/header";
import TopBar from "../../components/topbar";

export default function ViewProject(){
    return (
        <>
            <Header />
            <TopBar />
            <Grid
                container
                justifyContent="center"
                height="calc(100vh - 200px)"
            >               
                <Grid height="inherit" mt={2} item xs={11} md={7} sx={{display:"flex",justifyContent:"center", flexDirection: "column"}}>
                <TableContainer>
                    <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>DATE</TableCell>
                            <TableCell>RELEASE NAME</TableCell>
                            <TableCell>RELEASE DESCRIPTION</TableCell>
                            <TableCell>COMMENTS</TableCell>
                            <TableCell>PLATEFORM</TableCell>
                            <TableCell>ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Link href="#" mr={4}  underline="none">EDIT</Link>
                                    <Link href="#" underline="none">DELETE</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Link href="#" mr={4}  underline="none">EDIT</Link>
                                    <Link href="#" underline="none">DELETE</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Link href="#" mr={4}  underline="none">EDIT</Link>
                                    <Link href="#" underline="none">DELETE</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Link href="#" mr={4}  underline="none">EDIT</Link>
                                    <Link href="#" underline="none">DELETE</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Link href="#" mr={4}  underline="none">EDIT</Link>
                                    <Link href="#" underline="none">DELETE</Link>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <Link href="#" mr={4}  underline="none">EDIT</Link>
                                    <Link href="#" underline="none">DELETE</Link>
                                </TableCell>
                            </TableRow>
                            
                        </TableBody>
                    </Table>
                </TableContainer>                    
                </Grid>
            </Grid>            
        </>
    );
}