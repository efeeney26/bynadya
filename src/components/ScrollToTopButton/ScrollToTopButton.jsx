import { useCallback } from 'react'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp'
import { animateScroll as scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: theme.palette.primary
  }
}))

const ScrollToTopButton = () => {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = useCallback(() => {
    scroll.scrollToTop()
  }, [])

  return (
    <Zoom in={trigger}>
      <Fab size="small" aria-label="scroll back to top" className={classes.root} onClick={handleClick}>
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  )
}

export default ScrollToTopButton
