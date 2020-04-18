import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


import {Link, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

import { red } from '@material-ui/core/colors';


const useStyles = (height, width) => {
    const styles = makeStyles(theme => ({
        root: {
            maxWidth: 345,
            width: width,
            height: height,

            "& .MuiCardActionArea-root": {
                height: '100%'
              },
          
              "& .MuiCardActionArea-root:hover": {
                background: '#eeeeee',
              },
    
            '& .MuiCardHeader-root': {
                color: 'white',
    
                '& .MuiCardHeader-action': {
                    '& .MuiIconButton-root': {
                        color: 'white',
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

    return styles();
}

const MenuScreenItem = ({ item, onClick, height, width }) => {
    const classes = useStyles(height, width);

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card elevation={0} className={classes.root} onClick={() => onClick(item)}>
            <CardActionArea>
                <Link href={item.path}>
                    <CardMedia
                        className={classes.media}
                        image={item.pathIcon}
                        title={item.title}
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.title}
                        </Typography>
                    </CardContent>
                </Link>
            </CardActionArea>
        </Card>
    );
}


export default MenuScreenItem;