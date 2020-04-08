import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const DepartmentItemStyled = styled.div``;

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const DepartmentItem = ({item, onClick}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} onClick={() => onClick(item)}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt={item.name}
                height="140"
                image={item.img}
                title={item.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
    </Card>
    )
}



export default DepartmentItem;