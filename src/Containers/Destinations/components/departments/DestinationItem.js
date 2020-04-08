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

const DestinationItemStyled = styled.div``;

const useStyles = makeStyles({
    root: {
      maxWidth: 310,
    },
  });

const DestinationItem = ({item, onClick}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} onClick={() => onClick(item)}>
        <CardActionArea>
            <CardMedia
                component="img"
                alt={`Destination: ${item.destination}`}
                height="140"
                image={item.bus}
                title={`Destination: ${item.destination}`}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {item.origen}
            </Typography>

            <div style={{display: 'grid', gridTemplateColumns: '100px 200px'}}>
                <strong>Destination:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.destination}</Typography>
                <strong>Ouput:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.output}</Typography>
                <strong>Final:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.final}</Typography>
                <strong>Transport:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.transport}</Typography>
                <strong>Capacity:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.capacity}</Typography>
                <strong>Available:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.available}</Typography>
            </div>
            
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Reserve Ticket</Button>
        </CardActions>
    </Card>
    )
}



export default DestinationItem;