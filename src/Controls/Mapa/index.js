import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import atlantida from './atlantida.png'
import { PopoverControl } from '..';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

const AtlantidaStyled = styled.div`
    position: relative;
    height: 80px;
    width: 16px;

    strong {
        position: absolute;
        top: 26px;
        left: 40px;
    }
`;

const Atlantida = () => {
    const [currentTarget, setCurrentTarget] = useState(false);
    const classes = useStyles();

    const handleMouseOver = event => {
        setCurrentTarget(event.currentTarget);
    }

    const handleMouseLeave = event => {
        setCurrentTarget(null);
    }

    return (
        <AtlantidaStyled onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <img src={atlantida} />
            <strong>Atlántida</strong>

            <PopoverControl currentTarget={currentTarget}>
                <Typography className={classes.typography}>
                    <strong>Destinations</strong>
                    <br/>
                    La Ceiba
                </Typography>
            </PopoverControl>
        </AtlantidaStyled>
    )
}

export default Atlantida;