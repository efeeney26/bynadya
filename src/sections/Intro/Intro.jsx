import PropTypes from 'prop-types'
import cs from 'classnames'
import { Carousel } from 'react-responsive-carousel'

import { title, background, description } from '../../../public'
import { useWindowSize } from '../../utils'
import utilsStyles from '../../../styles/utils.module.css'

import styles from './Intro.module.css'

const Intro = ({ theme }) => {
  const [windowWidth] = useWindowSize()

  return (
    <section className={cs(utilsStyles.section, styles.container, theme)}>
      {windowWidth < 700
        ? <Carousel
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
          <div className={styles.imageContainer}>
            <img src={title} alt="title" className={styles.img}/>
          </div>
          <div className={styles.imageContainer}>
            <img src={background} alt="background" className={styles.img}/>
          </div>
          <div className={styles.imageContainer}>
            <img src={description} alt="description" className={styles.img}/>
          </div>
        </Carousel>
        : <div>Intro desktop</div>
      }
    </section>
  )
}

Intro.propTypes = {
  theme: PropTypes.string
}

Intro.defaultProps = {
  theme: ''
}

export default Intro
