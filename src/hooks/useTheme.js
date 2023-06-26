// MUI
import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors'

export const useTheme = () => {

  const theme = createTheme({
    palette: {
      primary: { main: '#03A9F4' },
      secondary: orange,
    },
    typography: {
      // fontFamily: '"Permanent Marker", "cursive"',
      fontFamily: '"Roboto", "sans-serif"',
      fontSize: 14
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif;',
            height: '1em'
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: '#eeeeee',
            borderRadius: '8px'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            color: "#eeeeee",
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'capitalize'
          }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: '#343434',
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
            borderRadius: '12px',
            backgroundColor: 'rgb(238, 238, 238, 0.5)'
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            "&:nth-child(2)": {
              "@media (max-width: 650px)": {
                display: "none"
              }
            }
          },
          head: {
            backgroundColor: "rgb(255, 255, 255, 0.9)",
          },
          body: {
            backgroundColor: "rgb(255, 255, 255, 0.8)",
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