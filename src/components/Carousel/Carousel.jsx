import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel'

import style from './Carousel.module.css'

const Carousel = ({ items, fullHeight }) => (
    items?.length &&
    <ResponsiveCarousel
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
        {items.map((item) => (
            <Box
                key={item.id}
                height={fullHeight ? '100vh' : '100%'}
      >
                <img
                    src={item.url}
                    alt={item.alt}
                    className={style.img}
        />
            </Box>
        ))}
    </ResponsiveCarousel>
)

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
    })),
    fullHeight: PropTypes.bool
}

Carousel.defaultProps = {
    items: [],
    fullHeight: false
}

export default Carousel
