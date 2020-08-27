import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import cs from 'classnames'

import { HEADER_NAVIGATION_TITLES } from '../../../constants'

import styles from './Header.module.css'

const Header = ({ theme }) => (
  <header className={cs(styles.header, theme)}>
    <p>ByNadya</p>
    <Link
      to={HEADER_NAVIGATION_TITLES.ABOUT}
      smooth
      duration={1000}
    >
      <p>About</p>
    </Link>
    <Link
      to={HEADER_NAVIGATION_TITLES.CASES}
      smooth
      duration={1000}
    >
      <p>Cases</p>
    </Link>
  </header>
)

Header.propTypes = {
  theme: PropTypes.string
}

Header.defaultProps = {
  theme: ''
}

export default Header
