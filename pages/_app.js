import PropTypes from 'prop-types'
import '../styles/globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
