import Box from '@material-ui/core/Box'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    zIndex: '-1'
  }
}))

const Background = () => {
  const classes = useStyles()

  return (
    <Box
      className={classes.root}
    >
      <Particles
        style={{
          backgroundColor: 'black',
          minHeight: '100vh',
          minWidth: '100vw'
        }}
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: false
              }
            }
          }
        }} />
    </Box>
  )
}

export default Background
