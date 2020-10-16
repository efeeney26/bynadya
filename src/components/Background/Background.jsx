import Box from '@material-ui/core/Box'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    zIndex: '-1'
  }
}))

const Background = () => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:700px)')

  return (
    <Box
      className={classes.root}
    >
      <Particles
        style={{
          background: '#000000',
          minHeight: '100vh',
          minWidth: '100vw'
        }}
        params={{
          particles: {
            number: {
              value: matches ? 40 : 60,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.15
            },
            move: {
              direction: 'right',
              speed: 0.2
            },
            size: {
              value: 1
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
              }
            }
          },
          retina_detect: true
        }}
      />
    </Box>
  )
}

export default Background
