import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { getCaseData, getAllCasesIds } from '../../utils'
import { Layout } from '../../src/components'

export const getStaticPaths = async () => {
  const paths = getAllCasesIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const caseData = await getCaseData(params.id)
  return {
    props: {
      caseData
    }
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

const Case = ({ caseData }) => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:700px)')

  return (
    <Layout>
      <Box
        p={2}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
        >
          {caseData.id}
        </Typography>
        <GridList
          className={classes.gridList}
          cols={matches ? 2.1 : 3.5}
          spacing={2}
        >
          {caseData.images.map((caseDataItem) => (
            <GridListTile
              key={caseDataItem}
              rows={matches ? 1.5 : 2.5}
            >
              <img src={require(`../../public/images/${caseDataItem}`)} alt="test" />
            </GridListTile>
          ))}
        </GridList>
        <Typography
          variant="body1"
          align="left"
          className={classes.description}
        >
          {caseData.description}
        </Typography>
        <GridList
          className={classes.gridList}
          cols={matches ? 2.1 : 3.5}
          spacing={2}
        >
          {caseData.images.map((caseDataItem) => (
            <GridListTile
              key={caseDataItem}
              rows={matches ? 1.5 : 2.5}
            >
              <img src={require(`../../public/images/${caseDataItem}`)} alt="test" />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Layout>
  )
}

Case.propTypes = {
  caseData: PropTypes.object
}

Case.defaultProps = {
  caseData: null
}

export default Case
