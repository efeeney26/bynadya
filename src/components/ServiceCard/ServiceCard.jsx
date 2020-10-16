import { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined'
import ListItemText from '@material-ui/core/ListItemText'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import { RichText } from 'prismic-reactjs'

const useStyles = makeStyles((theme) => ({
  card: {
    transition: '0.3s',
    boxShadow: '0 3px 15px -5px white',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px white'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  listAvatar: {
    backgroundColor: theme.palette.primary
  },
  cardFullDescription: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  cardAction: {
    padding: 0
  }
}))

const ServiceCard = ({ service }) => {
  const classes = useStyles()
  const [isCardExpanded, setCardExpand] = useState(false)

  const handleExpandClick = useCallback(() => {
    setCardExpand(!isCardExpanded)
  }, [isCardExpanded, setCardExpand])

  return (
    <Card
      className={classes.card}
    >
      <CardMedia
        className={classes.media}
        image={service.image.url}
        title={service.image.alt}
      />
      <CardContent>
        {service?.title.length &&
          <Typography
            color="textSecondary"
            variant="h6"
            gutterBottom
          >
            {RichText.asText(service.title)}
          </Typography>
        }
        {service?.subheader?.length &&
          <Typography
            variant="body1"
            color="textSecondary"
            gutterBottom
          >
            {RichText.asText(service.subheader)}
          </Typography>
        }
        {service?.description?.length &&
          <Typography variant="body2" color="textSecondary" component="p">
            {RichText.asText(service.description)}
          </Typography>
        }
      </CardContent>
      {service?.fulldescriptionblock?.length
        ? <>
          <CardActions
            disableSpacing
            classes={{ root: classes.cardAction }}
          >
            <IconButton
              className={cs(classes.expand, {
                [classes.expandOpen]: isCardExpanded
              })}
              onClick={handleExpandClick}
              aria-expanded={isCardExpanded}
              aria-label="show more"
            >
              <ExpandMoreIcon/>
            </IconButton>
          </CardActions>
          <Collapse in={isCardExpanded} timeout="auto">
            <CardContent
              classes={{ root: classes.cardFullDescription }}
            >
              {service?.fulldescriptionsubheader?.length &&
                <Typography variant="h6" align="center" color="textSecondary">
                  {RichText.asText(service.fulldescriptionsubheader)}
                </Typography>
              }
              <List>
                {service.fulldescriptionblock.map(descriptionItem => (
                  <ListItem
                    key={RichText.asText(descriptionItem.fulldescription)}
                  >
                    <ListItemAvatar>
                      <RemoveOutlinedIcon color="disabled"/>
                    </ListItemAvatar>
                    <ListItemText secondary={RichText.asText(descriptionItem.fulldescription)}/>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Collapse>
        </>
        : null
      }
    </Card>
  )
}

ServiceCard.propTypes = {
  service: PropTypes.object
}

ServiceCard.defaultProps = {
  service: {}
}

export default ServiceCard
