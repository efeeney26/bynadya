import cs from 'classnames'

import { main } from '../../../public'

import utilsStyles from '../../../styles/utils.module.css'

import styles from './About.module.css'

const About = () => (
  <section className={`${utilsStyles.section} ${styles.container}`}>
    <article className={styles.description}>
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
      <div>Ab consequuntur doloremque, earum eos excepturi harum hic iste libero nemo non obcaecati pariatur qui quia
          quo reiciendis repellat rerum similique tempora vel voluptatum! Atque debitis, sapiente! Explicabo minima,
          nihil!
      </div>
    </article>
    <div className={styles.imageContainer}>
      <img src={main} alt="main" className={styles.image}/>
    </div>
  </section>
)

export default About
