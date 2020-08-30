import { Container, Box } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel'

import { title, background, description } from '../../../public'

import styles from './Intro.module.css'

const Intro = () => {
  return (
    <Container
      component="section"
      maxWidth={false}
      disableGutters
    >
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
          height="100vh"
        >
          <img src={title} alt="title" className={styles.img}/>
        </Box>
        <Box
          height="100vh"
        >
          <img src={background} alt="background" className={styles.img}/>
        </Box>
        <Box
          height="100vh"
        >
          <img src={description} alt="description" className={styles.img}/>
        </Box>
      </Carousel>
    </Container>
  )
}

export default Intro
