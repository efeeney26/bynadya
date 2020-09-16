import { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { cyan, green } from '@material-ui/core/colors'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded'

import { Layout } from '../../components'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    flexGrow: 1
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
  avatar: {
    backgroundColor: cyan[500]
  },
  listAvatar: {
    backgroundColor: green[300]
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

const Services = ({ services }) => {
  const classes = useStyles()
  const [item, setExpandedItem] = useState({
    id: null,
    expanded: false
  })

  const handleExpandClick = useCallback((id) => () => {
    setExpandedItem((prevState) => {
      if (prevState.id && prevState.id !== id) {
        return {
          id,
          expanded: true
        }
      }
      return {
        id,
        expanded: !item.expanded
      }
    })
  }, [setExpandedItem, item])

  return (
    <Layout>
      <Box
        p={2}
      >
        <Grid
          container
          className={classes.root}
          justify="space-around"
          spacing={2}
        >
          {services.map((service) => (
            <Grid
              key={service.id}
              item
              xs={12}
              sm={10}
              md={5}
              lg={5}
            >
              <Card>
                <CardHeader
                  titleTypographyProps={{
                    variant: 'h6'
                  }}
                  subheaderTypographyProps={{
                    variant: 'subtitle1'
                  }}
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      <CameraEnhanceIcon/>
                    </Avatar>
                  }
                  title={service.title}
                  subheader={service.price}
                />
                <CardMedia
                  className={classes.media}
                  image={require(`../../../public/images/${service.image}`)}
                  title="card"
                />
                <CardContent>
                  {service.description &&
                  <Typography variant="body2" color="textSecondary" component="p">
                    {service.description}
                  </Typography>
                  }
                </CardContent>
                {service.fullDescription &&
                  <CardActions
                    disableSpacing
                    classes={{ root: classes.cardAction }}
                  >
                    <IconButton
                      className={cs(classes.expand, {
                        [classes.expandOpen]: service.id === item.id && item.expanded
                      })}
                      onClick={handleExpandClick(service.id)}
                      aria-expanded={item.expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon/>
                    </IconButton>
                  </CardActions>
                }
                <Collapse in={service.id === item.id && item.expanded} timeout="auto">
                  <CardContent
                    classes={{ root: classes.cardFullDescription }}
                  >
                    {service.fullDescriptionSubheader &&
                      <Typography variant="h6" align="center">
                        {service.fullDescriptionSubheader}
                      </Typography>
                    }
                    {Array.isArray(service.fullDescription)
                      ? <List>
                        {
                          service.fullDescription.map(descriptionItem => (
                            <ListItem
                              key={descriptionItem}
                            >
                              <ListItemAvatar>
                                <Avatar className={classes.listAvatar}>
                                  <CheckCircleRoundedIcon/>
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText primary={descriptionItem}/>
                            </ListItem>
                          ))}
                      </List>
                      : <Typography>{service.fullDescription}</Typography>
                    }
                  </CardContent>
                </Collapse>
              </Card>
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
