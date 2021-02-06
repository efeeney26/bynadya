import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        height: 'calc(100vh - 48px)',
        [theme.breakpoints.down('xs')]: {
            flexFlow: 'column-reverse nowrap'
        }
    },
    gridItemImg: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    gridItemTypography: {
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center'
    },
    img: {
        objectFit: 'contain'
    },
    divider: {
        backgroundColor: 'white',
        margin: theme.spacing(2, 0)
    }
}))

const Intro = ({ title, carouselItems }) => {
    const classes = useStyles()

    return (
        <Grid
            container
            className={classes.gridContainer}
        >
            <Grid
                item
                xs={12}
                sm={6}
                className={classes.gridItemImg}
            >
                <img
                    src={carouselItems[2].url}
                    alt="main"
                    className={classes.img}
                    width="100%"
                    height="80%"
                />
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                className={classes.gridItemTypography}
            >
                <Typography
                    variant="h2"
                >
                    Визуализатор бренда
                </Typography>
                <Divider
                    className={classes.divider}
                />
                <Typography
                    variant="h2"
                >
                    Контент менеджер
                </Typography>
            </Grid>
        </Grid>
    )
}

Intro.propTypes = {
    title: PropTypes.array,
    carouselItems: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
    }))
}

Intro.defaultProps = {
    title: [],
    carouselItems: []
}

export default Intro
