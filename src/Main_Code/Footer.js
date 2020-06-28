import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import "./Main.css";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import slider from './slider';
import Footer from './Footer';
import cardimage from '../image/cards.jpg';
import privacy from './privacy';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 10, 6, 10),
    },
    heroContent1: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(20, 10, 6, 10)
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(10),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 25,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(1),
    },
    toolbar1: {
        minHeight: 500
    },
    title: {
        fontWeight: 100,
        fontSize: 25
    },
    title2: {
        fontWeight: 700,
        fontSize: 15
    },
    title1: {
        flexGrow: 1,
        align: 'center',
        padding: theme.spacing(0, 0, 0, 10),
    },
    fontsize: {
        fontWeight: 1000
    },
    typography: {
        subtitle1: {
            fontSize: 1,
        },
        colorbackground: {
            backgroundColor: theme.palette.background.paper,
        }
    },
    media: {
        height: 40,
    },
}));
export default function Album() {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
     
                <AppBar position="static" style={{ backgroundColor: 'pink' }} >
                    <Toolbar>
                        <Container maxWidth="sm">
                            <Typography className={classes.title} variant="h1" align="center">
                                dimend
                                    <Typography className={classes.title2} variant="overline" align="center">
                                    SCAASI
                                    </Typography>
                            </Typography>
                            <Typography variant="body" align="center" color="primary" paragraph>
                                20+ Years of Trust
            </Typography>
                            <Typography variant="h6" align="center" color="inherit" paragraph>
                                Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely.
            </Typography>

                            <hr style={{ border: "0.5px solid white" }} />
                            {privacy()}
                        </Container>
                    </Toolbar>
                </AppBar>
          
        </div>
    );
}