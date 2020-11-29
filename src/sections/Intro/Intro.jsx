import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { RichText } from 'prismic-reactjs'

import { Layout, Carousel } from '../../components'

const useStyles = makeStyles(() => ({
  root: {
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
          className={classes.root}
          style={{
            background: `left bottom / 35% no-repeat url(${carouselItems[2].url})`
          }}
        >
          <Typography
            variant="h1"
          >
            {RichText.asText(title)}
          </Typography>
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
