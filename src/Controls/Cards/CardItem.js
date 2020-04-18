import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow 
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    // background: 'black',
    // border: 'solid 1px gray',

    "& .MuiCardActionArea-root": {
      height: '100%'
    },

    "& .MuiCardActionArea-root:hover": {
      background: '#eeeeee',
    },

    '& .MuiCardHeader-root': {
      // color: 'white',

      '& .MuiCardHeader-action': {
        '& .MuiIconButton-root': {
          // color: 'white',
        }
      }
    },

    '& .MuiTypography-body2': {
      // color: 'white',
    }

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const CardItem = ({ item, onClick, index }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grow in style={{ transformOrigin: '0 0 0' }}
    {...{ timeout: 2000 * index }}>
      <Card elevation={0} className={classes.root} onClick={() => onClick(item)}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.pathIcon}
            title={item.title}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>

        </CardActionArea>
      </Card>
    </Grow>
  );
}


export default CardItem;