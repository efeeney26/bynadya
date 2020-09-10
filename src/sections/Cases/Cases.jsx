import Link from 'next/link'
import { Box, GridList, GridListTile, GridListTileBar, Button, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Layout } from '../../components'
import { cases } from '../../scheme'

const useStyles = makeStyles((theme) => {
  console.log('the', theme)

  return {
    button: {
      margin: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        fontSize: 8
      }
    }
  }
})

const Cases = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Box p={2}>
        <GridList
          cols={2}
        >
          {cases.map((caseItem) => (
            <GridListTile
              key={caseItem.id}
              rows={2}
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

export default Cases
