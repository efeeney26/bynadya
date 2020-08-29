import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu as MenuIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Header = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget)
  }, [setAnchorEl])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  return (
    <AppBar
      position="absolute"
      color="transparent"
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
            ByNadya
        </Typography>
        <IconButton
          edge="end"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Cases</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  theme: PropTypes.string
}

Header.defaultProps = {
  theme: ''
}

export default Header
