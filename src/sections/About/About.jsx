import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import { main } from '../../../public'
import { Layout } from '../../components'

import styles from './About.module.css'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    flexGrow: 1
  }
}))

const About = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Grid
        container
        className={classes.root}
        justify="space-around"
        alignItems="center"
        alignContent="space-around"
      >
        <Grid
          item
          xs={11}
          sm={11}
          md={5}
          lg={5}
        >
          <Box
            display="flex"
            flexDirection="column"
          >
            <Typography
              variant="h4"
            >
            Hello
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
            >
            Im Nadya.
            </Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci autem culpa, doloremque facilis
              inventore ipsam iure labore magni, natus, neque numquam obcaecati omnis optio recusandae rem repellat
              repudiandae tempora?
            Autem commodi dolore dolores eligendi est harum impedit inventore laboriosam nostrum quae, quam sapiente
              similique veniam? Dolorum ex impedit ipsam magni molestiae nemo nisi nostrum quam quis, ratione tempora vel?
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={7}
          sm={7}
          md={4}
          lg={4}
        >
          <img src={main} alt="main" className={styles.image}/>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
