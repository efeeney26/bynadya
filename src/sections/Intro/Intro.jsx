import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { RichText } from 'prismic-reactjs'

import { Layout, Carousel } from '../../components'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    flexGrow: 1
  }
}))

const Intro = ({ title, carouselItems }) => {
  const matches = useMediaQuery('(max-width:700px)')
  const classes = useStyles()

  return (
    <Layout>
      {matches
        ? <Carousel items={carouselItems} fullHeight={matches} />
        : <Grid
          container
          className={classes.root}
          justify='space-around'
          alignItems='center'
          alignContent='space-around'
        >
          <Grid
            item
            sm={4}
            md={4}
            lg={4}
          >
            <Carousel items={carouselItems} />
          </Grid>
          <Grid
            item
            sm={5}
            md={7}
            lg={7}
          >
            <Typography
              variant="h1"
            >
              {RichText.asText(title)}
            </Typography>
          </Grid>
        </Grid>
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
