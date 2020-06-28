
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <div className={classes.controls}>
                    <Typography component="h1" variant="h3" gutterbottom noWrap>
                        Keep In Touch
                   </Typography>
                </div>
                <Typography variant="h6" align="center" color="red" paragraph>
                    Every diamond in our collection is selected for its superior
                    cut, symmetry and shape.
            </Typography>
            </div>
            <CardMedia
                className={classes.cover}
                image="https://source.unsplash.com/random"
                title="Live from space album cover"
            />
            <CardMedia
                className={classes.cover}
                image="https://source.unsplash.com/random"
                title="Live from space album cover"
            />

        </Card>
    );
}