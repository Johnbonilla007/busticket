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

const ScheduleItemStyled = styled.div``;

const useStyles = makeStyles({
    root: {
      maxWidth: 310,
    },
  });

const ScheduleItem = ({item, destinationItem, onClick, showAction}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={() => onClick(item)}>
        <CardActionArea>
            {/* <CardMedia
                component="img"
                alt={`Destination: ${item.destination}`}
                height="140"
                image={item.bus}
                title={`Destination: ${item.destination}`}
            /> */}
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {item.transportationUnit.unitType.categoria}
                <strong>{` ${item.precio}lps`}</strong>
            </Typography>

            <div style={{display: 'grid', gridTemplateColumns: '100px 200px'}}>
                {/* <strong>Destination:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.destinationItem}</Typography> */}
                <strong>Salida:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.horaSalida}</Typography>
                <strong>Hora Llegada:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.horaLlegada}</Typography>
                <strong>Unidad Transporte:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.transportationUnit.unidadTransporteNo}</Typography>
                <strong>Capacidad:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.transportationUnit.capacidad}</Typography>
                <strong>Asientos Disponibles:</strong>
                    <Typography variant="body2" color="textSecondary" component="p">{item.transportationUnit.asientosDisponibles}</Typography>
            </div>
            
            </CardContent>
        </CardActionArea>
      
        {
            !showAction ? (
                <CardActions>
                    <Button size="small" color="primary">Reserve Ticket</Button>
                </CardActions>
            ) : null
        }
    </Card>
    )
}



export default ScheduleItem;