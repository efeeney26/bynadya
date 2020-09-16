import { useState, useCallback } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu as MenuIcon } from '@material-ui/icons'
import { Link } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  }
}))

const NavBar = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget)
  }, [setAnchorEl])

  const handleMenuClose = useCallback(() => {
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
            vertical: 'bottom',
            horizontal: 'center'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          getContentAnchorEl={null}
        >
          <MenuItem>
            <Link
              to="About"
              smooth
              duration={1000}
              onClick={handleMenuClose}
            >
              About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="Cases"
              smooth
              duration={1000}
              onClick={handleMenuClose}
            >
              Cases
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="Services"
              smooth
              duration={1000}
              onClick={handleMenuClose}
            >
              Services
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
