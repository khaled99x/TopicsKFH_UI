import { createTheme } from '@mui/material';

const CustomTheme = createTheme({
  palette: {
    success: {
      main: '#128754', // replace with your desired success color
    },
    primary: {
      main: '#128754', // your success color
    },
    warning: {
      main: '#fec33e',

    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          paddingBottom: '10px',
          paddingTop:'10px',
          marginBottom: '10px',
          fontSize: '18px',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        color: 'success', 
      },
    },
    MuiTableContainer:{
      styleOverrides: {
        root: {
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          borderBottom: "0px",
        },        
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-child(even)': {
            backgroundColor: '#d9d9d9',
          },
          '&:nth-child(odd)': {
            backgroundColor: '#ffffff',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#d9d9d9',
          
        },
      },
    },
    MuiTableHead:{
      styleOverrides: {
        root: {
          '& th:first-child': {
            borderTopLeftRadius: '15px',            
          },
          '& th:last-child': {
            borderTopRightRadius: '15px',
          },
        },
      },
    },
  },
  
  
});

export default CustomTheme;