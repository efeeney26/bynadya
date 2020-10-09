import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'

const Layout = ({ children }) => (
  <Container
    component="section"
    maxWidth={false}
    disableGutters
  >
    {children}
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node
}

Layout.defaultProps = {
  children: null
}

export default Layout
