import PropTypes from 'prop-types'
import cs from 'classnames'

import utilsStyles from '../../styles/utils.module.css'

import styles from './Intro.module.css'

const Intro = ({ theme }) => (
  <section className={cs(utilsStyles.section, styles.container, theme)}>
    <h1>Intro</h1>
  </section>
)

Intro.propTypes = {
  theme: PropTypes.string
}

Intro.defaultProps = {
  theme: ''
}

export default Intro
