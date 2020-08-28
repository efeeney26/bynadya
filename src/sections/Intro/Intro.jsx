import PropTypes from 'prop-types'
import { Container, Box } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'

import { title, background, description } from '../../../public'
import { useWindowSize } from '../../utils'

import styles from './Intro.module.css'

const Intro = ({ theme }) => {
  const [windowWidth] = useWindowSize()

  return (
    <Container
      maxWidth={false}
      disableGutters
    >
      <Box>
        <Carousel
          autoPlay
          infiniteLoop
          dynamicHeight={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          stopOnHover={false}
          emulateTouch
          swipeable
          useKeyboardArrows
          transitionTime={700}
          swipeScrollTolerance={5}
          interval={8000}
        >
          <Box
            width="auto"
            height="100vh"
          >
            <img src={title} alt="title" className={styles.img}/>
          </Box>
          <Box
            width="auto"
            height="100vh"
          >
            <img src={background} alt="background" className={styles.img}/>
          </Box>
          <Box
            width="auto"
            height="100vh"
          >
            <img src={description} alt="description" className={styles.img}/>
          </Box>
        </Carousel>
      </Box>
    </Container>
  )
}

Intro.propTypes = {
  theme: PropTypes.string
}

Intro.defaultProps = {
  theme: ''
}

export default Intro
