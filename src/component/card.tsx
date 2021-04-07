import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import LanguageIcon from '@material-ui/icons/Language';

import DDButton from './common/DDButton'
import colorCodes from '../common/colors'

const { WHITE_1, BLACK, PINK_1, GREY_3 } = colorCodes

const useStyles = makeStyles((theme) => ({
  root: {
    '*': {
      color: WHITE_1
    },
    maxWidth: 250,
    backgroundColor: PINK_1,
    border: `1px solid ${GREY_3}`,
    boxSizing: `border-box`,
    filter: `drop-shadow(0px 3px 20px rgba(0, 0, 0, 0.14))`,
    borderRadius: `7px`
  },
  media: {
    height: 0,
    paddingTop: '16%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: WHITE_1,
    color: BLACK
  },
  whiteText: {
    color: WHITE_1
  },
  title: {
    fontSize: '20px'
  },
  button: {
    width: '90%',
    background: BLACK,
    margin: '5%'
  }
}));

const AppCard = () => {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.whiteText}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <LanguageIcon />
          </Avatar>
        }
        title={<div className={classes.title}>ML Insight</div>}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent >
        <Typography variant="body2" className={classes.whiteText} component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>

      <DDButton className={classes.button} label='Select action' />
    </Card>
  );
}

export default AppCard