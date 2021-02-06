import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

// Create a theme instance.
const primaryTheme = createMuiTheme({
    palette: {
        text: {
            primary: grey[50]
        }
    },
    typography: {
        fontFamily: [
            'Raleway',
            'sans-serif'
        ].join(','),
        h1: {
            '@media (max-width:960px)': {
                fontSize: '1.9rem'
            },
            fontSize: '5.6rem'
        }
    },
    zIndex: {
        background: -1
    }
})

export const theme = responsiveFontSizes(primaryTheme)
