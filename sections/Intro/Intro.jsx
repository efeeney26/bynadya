import PropTypes from 'prop-types'
import cs from 'classnames'
import { Carousel } from 'react-responsive-carousel'

import utilsStyles from '../../styles/utils.module.css'

import styles from './Intro.module.css'

const Intro = ({ theme }) => (
  <section className={cs(utilsStyles.section, styles.container, theme)}>
    <Carousel
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
      interval={6000}
      centerSlidePercentage={50}
    >
      <div className={styles.imageContainer}>
        <img src="/images/Background.jpg" alt="title" className={styles.img}/>
      </div>
    </Carousel>
  </section>
)

Intro.propTypes = {
  theme: PropTypes.string
}

Intro.defaultProps = {
  theme: ''
}

export default Intro
