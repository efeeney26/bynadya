import { Container, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { main } from '../../../public'

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
    <Container
      component="section"
      maxWidth={false}
      disableGutters
    >
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
          <article>
            <h1>Hello</h1>
            <p>
            Im Nadya.
            </p>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci autem culpa, doloremque facilis
            inventore ipsam iure labore magni, natus, neque numquam obcaecati omnis optio recusandae rem repellat
            repudiandae tempora?
            </div>
            <div>Autem commodi dolore dolores eligendi est harum impedit inventore laboriosam nostrum quae, quam sapiente
            similique veniam? Dolorum ex impedit ipsam magni molestiae nemo nisi nostrum quam quis, ratione tempora vel?
            </div>
            <div>Ab consequuntur doloremque, earum eos excepturi harum hic iste libero nemo non obcaecati pariatur qui
            quia
            quo reiciendis repellat rerum similique tempora vel voluptatum! Atque debitis, sapiente! Explicabo minima,
            nihil!
            </div>
          </article>
        </Grid>
        <Grid
          item
          xs={8}
          sm={7}
          md={4}
          lg={4}
        >
          <img src={main} alt="main" className={styles.image}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
