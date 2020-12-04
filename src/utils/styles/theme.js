import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    text: {
      primary: grey[50]
    }
  },
  overrides: {
    MuiContainer: {
      root: {
        height: '100vh'
      }
    }
  },
  typography: {
    h1: {
      fontFamily: ['Kurale', 'cursive']
    },
    fontFamily: [
      'Lobster',
      'cursive'
    ].join(',')
  }
})
