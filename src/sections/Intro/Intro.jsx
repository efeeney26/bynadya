import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { Layout, Carousel } from '../../components'

const useStyles = makeStyles(() => ({
  box: {
    height: '100vh'
  },
  grid: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}))

const Intro = ({ title, carouselItems }) => {
  const matches = useMediaQuery('(max-width:700px)')
  const classes = useStyles()

  return (
    <Layout>
      {matches
        ? <Carousel items={carouselItems} fullHeight={matches} />
        : <Box
          p={4}
          className={classes.box}
          style={{
            background: `left bottom / 35% no-repeat url(${carouselItems[2].url})`
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
              >
                Визуализатор бренда
              </Typography>
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
