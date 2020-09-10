import { useCallback } from 'react'
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { KeyboardArrowUp } from '@material-ui/icons'
import { animateScroll as scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
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
      <Fab color="secondary" size="small" aria-label="scroll back to top" className={classes.root} onClick={handleClick}>
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  )
}

export default ScrollToTopButton
