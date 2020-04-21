import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import {
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Button, 
    Typography
} from '@material-ui/core';
const DestinationStyled = styled.div``;


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const DestinationItem = ({item, onClick}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} onClick={() => onClick(item)}>
        <CardActionArea>
            {/* <CardMedia
                component="img"
                alt={item.name}
                height="140"
                image={item.img}
                title={item.name}
            /> */}
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {`Destino: ${item.nombreDestino}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {`Departamento: ${item.departamentoDestino}`}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
                {`Ciudad Destino: ${item.ciudadDestino}`}
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



export default DestinationItem;