import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import yoro from './yoro1.png'
import { PopoverControl } from '../..';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

const YoroStyled = styled.div`
    position: absolute;
    height: 80px;
    top: 26px;
    left: -18px;

    img {
        width: 216px;
    }

    strong {
        position: absolute;
        top: 60px;
        left: 60px;
    }
`;

const Yoro = () => {
    const [currentTarget, setCurrentTarget] = useState(false);
    const classes = useStyles();

    const handleMouseOver = event => {
        setCurrentTarget(event.currentTarget);
    }

    const handleMouseLeave = event => {
        setCurrentTarget(null);
    }

    return (
        <YoroStyled onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <img src={yoro} />
                <strong>Yoro</strong>

                <PopoverControl currentTarget={currentTarget}>
                    <Typography className={classes.typography}>
                        <strong>Destinations</strong>
                        <br/>
                        El Progreso
                    </Typography>
                </PopoverControl>
        </YoroStyled>
    )
}

export default Yoro;