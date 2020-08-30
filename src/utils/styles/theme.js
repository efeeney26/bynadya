import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
export const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        height: '100vh'
      }
    }
  }
})
