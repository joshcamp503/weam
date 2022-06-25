// MUI
import { createTheme } from '@mui/material';
import { lightBlue, orange } from '@mui/material/colors'

export const useTheme = () => {

  const theme = createTheme({
    palette: {
      primary: lightBlue,
      secondary: orange,
    },
    typography: {
      fontFamily: '"Permanent Marker", "cursive"',
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif;'
          }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
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