import { Box, GridList, GridListTile, GridListTileBar } from '@material-ui/core'

import { Layout } from '../../components'
import { cases } from '../../scheme'

const Cases = () => {
  return (
    <Layout>
      <Box p={2}>
        <GridList
          cols={2}
        >
          {cases.map((caseItem) => (
            <GridListTile
              key={caseItem.img}
              rows={2}
            >
              <img
                src={require(`../../../public/images/${caseItem.img}`)}
                alt={caseItem.title}
              />
              <GridListTileBar
                title={caseItem.title}
                subtitle={<span>by: {caseItem.author}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Layout>
  )
}

export default Cases
