import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import { Menu as MenuIcon } from '@material-ui/icons'
import UIMenu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { Link } from 'react-scroll'

const Menu = ({ items, mobileView }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuClick = useCallback((event) => {
    setAnchorEl(event.currentTarget)
  }, [setAnchorEl])

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  return (
    mobileView
      ? <>
        <IconButton
          edge="end"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuClick}
          color="inherit"
        >
          <MenuIcon/>
        </IconButton>
        <UIMenu
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
          {items?.length &&
          items.map((item) => (
            <MenuItem
              key={item.id}
            >
              <Link
                to={item.title}
                smooth
                duration={item.duration}
                onClick={handleMenuClose}
              >
                {item.title}
              </Link>
            </MenuItem>
          ))}
        </UIMenu>
      </>
      : <>
        {items?.length &&
          items.map((item) => (
            <Link
              key={item.id}
              to={item.title}
              smooth
              duration={item.duration}
              onClick={handleMenuClose}
            >
              <Button
                variant="text"
                size="large"
              >
                {item.title}
              </Button>
            </Link>
          ))}
      </>
  )
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.number
  })),
  mobileView: PropTypes.bool
}

Menu.defaultProps = {
  items: [],
  mobileView: false
}

export default Menu
