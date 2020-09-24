import PropTypes from 'prop-types'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { Menu } from '../../components'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  }
}))

const NavBar = ({ barItems }) => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:700px)')

  return (
    <AppBar
      position="absolute"
      color="transparent"
      variant="outlined"
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
            ByNadya
        </Typography>
        <Menu
          items={barItems}
          mobileView={matches}
        />
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  barItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.number
  }))
}

NavBar.defaultProps = {
  barItems: []
}

export default NavBar
