import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { Layout } from '../../components'

import styles from './About.module.css'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    flexGrow: 1
  },
  description: {
    textAlign: 'justify'
  }
}))

const About = ({ title, subTitle, description, image }) => {
  const classes = useStyles()

  return (
    <Layout>
      <Grid
        container
        className={classes.root}
        justify='space-around'
        alignItems='center'
        alignContent='space-around'
      >
        <Grid
          item
          xs={11}
          sm={11}
          md={5}
          lg={5}
        >
          <Typography
            variant="h4"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            variant='subtitle1'
            gutterBottom
          >
            {subTitle}
          </Typography>
          <Typography
            paragraph
          >
            {description}
          </Typography>
        </Grid>
        <Grid
          item
          xs={7}
          sm={7}
          md={4}
          lg={4}
        >
          <img src={image.url} alt={image.alt} className={styles.image}/>
        </Grid>
      </Grid>
    </Layout>
  )
}

About.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  })
}

About.defaultProps = {
  title: '',
  subTitle: '',
  description: '',
  image: {
    url: '',
    alt: 'profile'
  }
}

export default About
