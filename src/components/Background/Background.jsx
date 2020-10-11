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
          background: 'linear-gradient(to right, #a8c0ff, #3f2b96)',
          minHeight: '100vh',
          minWidth: '100vw'
        }}
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 2,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: 'bottom-right',
              out_mode: 'out'
            }
          }
        }}
      />
    </Box>
  )
}

export default Background
