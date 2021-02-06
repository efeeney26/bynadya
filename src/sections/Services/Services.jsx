import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { Layout, ServiceCard } from '../../components'

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        flexGrow: 1
    }
}))

const Services = ({ services }) => {
    const classes = useStyles()

    return (
        <Layout>
            <Box
                p={2}
      >
                <Grid
                    container
                    className={classes.root}
                    justify="space-between"
                    spacing={3}
        >
                    {services.map((service) => (
                        <Grid
                            key={service.uid}
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            lg={4}
            >
                            <ServiceCard service={service.data} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    )
}

Services.propTypes = {
    services: PropTypes.arrayOf(PropTypes.object)
}
Services.defaultProps = {
    services: null
}

export default Services
