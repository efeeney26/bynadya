import Link from 'next/link'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { RichText } from 'prismic-reactjs'

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
    const matches = useMediaQuery('(max-width:700px)')

    return (
        <Box p={2}>
            <GridList
                cols={matches ? 2 : 3}
                spacing={24}
      >
                {cases.map(({ data, uid }) => (
                    <GridListTile
                        key={uid}
                        rows={matches ? 2 : 2.7}
          >
                        <img
                            src={data.image.url}
                            alt={data.image.alt}
            />
                        <GridListTileBar
                            title={RichText.asText(data.title)}
                            subtitle={<span>{data.date}</span>}
                            actionIcon={
                                <Link
                                    href="cases/[uid]"
                                    as={`/cases/${uid}`}
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
    )
}

Cases.propTypes = {
    cases: PropTypes.arrayOf(PropTypes.object)
}

Cases.defaultProps = {
    cases: []
}

export default Cases
