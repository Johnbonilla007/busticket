import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import logo from './logo.jpg';

const BackgroundMainStyled = styled.div`
img.bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: ${prop => prop.top};
  left: 0;

  opacity: 90%;

  z-index: 0;
}

@media screen and (max-width: 1024px) { /* Specific to this particular image */
  img.bg {
    left: 50%;
    margin-left: -512px;   /* 50% */
  }
}


`;

const BackgroundMain = ({top}) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

        setX(x);
        setY(y);
    }, []);

    return <BackgroundMainStyled top={top}>
            <img className="bg" src={logo} />
        </BackgroundMainStyled>
}


export default BackgroundMain;