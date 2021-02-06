import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { Layout, Background } from '../../src/components'
import { client } from '../../prismic-configuration'
import { getGroupedData } from '../../src/utils'

export const getStaticProps = async ({ params }) => {
    const { uid } = params
    const { data } = await client.getByUID('case_page', uid, {})
    return {
        props: { data }
    }
}

export const getStaticPaths = async () => {
    const { results } = await client.query(Prismic.Predicates.at('document.type', 'case'))

    const paths = results.map(caseItem => ({
        params: {
            uid: caseItem.uid
        }
    }))
    return {
        paths,
        fallback: false
    }
}

const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)'
    },
    description: {
        margin: theme.spacing(3, 0)
    }
}))

const Case = ({ data }) => {
    const carouselBeforeItems = useMemo(() => getGroupedData(data?.carouselbefore), [data.carouselbefore])
    const carouselAfterItems = useMemo(() => getGroupedData(data?.carouselafter), [data.carouselafter])
    const classes = useStyles()
    const matches = useMediaQuery('(max-width:700px)')

    return (
        <Layout>
            <Background />
            <Box
                p={2}
      >
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
        >
                    {RichText.asText(data.title)}
                </Typography>
                <GridList
                    className={classes.gridList}
                    cols={matches ? 2.1 : 3.5}
                    spacing={2}
        >
                    {carouselBeforeItems.map((beforeItem) => (
                        <GridListTile
                            key={beforeItem.id}
                            rows={matches ? 1.5 : 2.5}
            >
                            <img src={beforeItem.url} alt={beforeItem.alt} />
                        </GridListTile>
                    ))}
                </GridList>
                <Typography
                    variant="body1"
                    align="left"
                    className={classes.description}
        >
                    {RichText.asText(data.description)}
                </Typography>
                <GridList
                    className={classes.gridList}
                    cols={matches ? 2.1 : 3.5}
                    spacing={2}
        >
                    {carouselAfterItems.map((afterItem) => (
                        <GridListTile
                            key={afterItem.id}
                            rows={matches ? 1.5 : 2.5}
            >
                            <img src={afterItem.url} alt={afterItem.alt} />
                        </GridListTile>
                    ))}
                </GridList>
            </Box>
        </Layout>
    )
}

Case.propTypes = {
    data: PropTypes.object
}

Case.defaultProps = {
    data: null
}

export default Case
