import Link from 'next/link'
import PropTypes from 'prop-types'
import { Box, GridList, GridListTile, GridListTileBar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Layout } from '../../components'
import { useWindowSize } from '../../utils'

const useStyles = makeStyles((theme) => {
  return {
    button: {
      margin: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        fontSize: 8
      }
    }
  }
})

const Cases = ({ cases }) => {
  const classes = useStyles()
  const [width] = useWindowSize()

  return (
    <Layout>
      <Box p={2}>
        <GridList
          cols={width < 700 ? 2 : 3}
        >
          {cases.map((caseItem) => (
            <GridListTile
              key={caseItem.id}
              rows={width < 700 ? 2 : 2.7}
            >
              <img
                src={require(`../../../public/images/${caseItem.img}`)}
                alt={caseItem.title}
              />
              <GridListTileBar
                title={caseItem.title}
                subtitle={<span>by: {caseItem.author}</span>}
                actionIcon={
                  <Link
                    href="/cases/[id]"
                    as={`/cases/${caseItem.id}`}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      color="default"
                      className={classes.button}
                    >
                    Show Case
                    </Button>
                  </Link>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Layout>
  )
}

Cases.propTypes = {
  cases: PropTypes.arrayOf(PropTypes.object)
}

Cases.defaultProps = {
  cases: []
}

export default Cases
