import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Layout } from '../../components'

const useStyles = makeStyles(() => ({
  box: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  grid: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'flex-end'
  }
}))

const Intro = ({ title, carouselItems }) => {
  const matches = useMediaQuery('(max-width:700px)')
  const classes = useStyles()

  return (
    <Layout>
      {matches
        ? <Box
          p={2}
          className={classes.box}
          style={{
            background: `bottom / 80% no-repeat url(${carouselItems[2].url})`
          }}
        >
          <Box
            height='50vh'
          >
            <Typography
              variant="h4"
              style={{
                fontSize: '2rem'
              }}
            >
              Визуализатор бренда
            </Typography>
            <Divider
              style={{
                backgroundColor: 'white'
              }}
            />
            <Typography
              variant="h4"
            >
              Контент менеджер
            </Typography>
          </Box>
        </Box>
        : <Box
          p={4}
          className={classes.box}
          style={{
            background: `left bottom / 40% no-repeat url(${carouselItems[2].url})`
          }}
        >
          <Grid
            container
            className={classes.grid}
          >
            <Grid
              item
              sm={5}
              md={7}
              lg={8}
            >
              <Typography
                variant="h1"
                style={{
                  fontSize: '5.6rem'
                }}
              >
                Визуализатор бренда
              </Typography>
              <Divider
                style={{
                  backgroundColor: 'white'
                }}
              />
              <Typography
                variant="h1"
              >
                Контент менеджер
              </Typography>
            </Grid>
          </Grid>
        </Box>
      }
    </Layout>
  )
}

Intro.propTypes = {
  title: PropTypes.array,
  carouselItems: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }))
}

Intro.defaultProps = {
  title: [],
  carouselItems: []
}

export default Intro
