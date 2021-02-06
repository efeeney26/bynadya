import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2)
    }
}))

const PreviewLink = () => {
    const classes = useStyles()

    return (
        <Link
            href='/api/exit-preview'
            className={classes.root}
    >
            Click to exit preview mode
        </Link>
    )
}

export default PreviewLink
