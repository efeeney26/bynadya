import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  mainBox: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '80%',
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'left bottom',
      backgroundSize: '40%',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  },
  descriptionBox: {
    height: '50vh'
  },
  divider: {
    backgroundColor: 'white',
    margin: theme.spacing(2, 0)
  }
}))

const Intro = ({ title, carouselItems }) => {
  const classes = useStyles()

  return (
    <Box
      p={4}
      className={classes.mainBox}
      style={{
        backgroundImage: `url(${carouselItems[2].url})`
      }}
    >
      <Box
        pt={4}
        className={classes.descriptionBox}
      >
        <Typography
          variant="h1"
        >
              Визуализатор бренда
        </Typography>
        <Divider
          className={classes.divider}
        />
        <Typography
          variant="h1"
        >
              Контент менеджер
        </Typography>
      </Box>
    </Box>
  )
}

Intro.propTypes = {
  title: PropTypes.array,
  carouselItems: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }))
}

Intro.defaultProps = {
  title: [],
  carouselItems: []
}

export default Intro
