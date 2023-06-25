// MUI
import { createTheme } from '@mui/material';
import { lightBlue, orange } from '@mui/material/colors'

export const useTheme = () => {

  const theme = createTheme({
    palette: {
      primary: { main: '#03A9F4' },
      secondary: orange,
    },
    typography: {
      // fontFamily: '"Permanent Marker", "cursive"',
      fontFamily: '"Roboto", "sans-serif"',
      fontSize: '20px'
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif;'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            fontWeight: 'bold',
            textTransform: 'capitalize'
          }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: '#555555',
            fontFamily: '"Permanent Marker", "cursive"',
            textDecoration: 'none'
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif;'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '12px'
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            width: 'min-content'
          },
          body: {
            fontSize: '12px'
          }
        }
      },
      MuiTablePagination: {
        styleOverrides: {
          selectLabel: {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
          },
          displayedRows: {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
          }
        }
      }
    }
  })

  return { theme }

}