import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { main } from '../../../public'

import styles from './About.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
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
        alignContent="center"
      >
        <Grid
          item
          lg={5}
          xs={13}
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
          lg={4}
          xs={8}
        >
          <img src={main} alt="main" className={styles.image}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
