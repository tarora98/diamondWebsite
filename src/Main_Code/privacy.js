import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import "./Main.css";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from "@material-ui/core/Hidden";
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
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 10, 6, 10),
    },
    heroContent1: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(20, 10, 6, 10)
    },
    heroButtons: {
        padding: theme.spacing(2, 10, 2, 10),
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
        paddingTop: '86.25%', // 16:9
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
    toolbar: {
        minHeight: 25,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(),
    },
    toolbar1: {
        minHeight: 200,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(),
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-start',
        fontWeight: 100,
        fontSize: 25
    },
    title2: {
        flexGrow: 1,
        alignSelf: 'flex-start',
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
    MuiTypographycolorInherit: {
        color: 'red'

    },
    typography: {
        subtitle1: {
            fontSize: 1,
        },
        colorbackground: {
            backgroundColor: theme.palette.background.paper,
        },
        MuiTypographycolorinherit: {
            colorInherit: 'red'
        }
    },
    media: {
        height: 40,
    },
    third: {
        float: "none",
        display: 'relative',
        backgroundColor: 'red',
        padding: theme.spacing(10, 0, 10, 10),
    },
    para: {
        fontColor: 'pink'
    },
    kites: {
        backgroundColor: 'inherit',
        alignItems: 'center',
        paddingTop: '290px',
        [theme.breakpoints.down('xs')]: {
            backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: theme.palette.primary.main,
        },
    },
    sidebar: {
        backgroundColor: 'red',
        height: '500px',
        width: 'auto',
        position: 'relative',
        Top: '350px',
    },
    uparbar: {
        position: 'absolute'
    }
}));
const theme = createMuiTheme();

theme.typography.h6 = {
    color: 'pink'
};

export default function privacy() {
    const classes = makeStyles();
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={1} sm={1} md={1} />
                <Grid item xs sm md>
                    <Link to="/privacy" style={{ color: 'transparent' }}>
                        <h2
                            style={{
                                fontFamily: "Montserrat,sans-serif",
                                fontSize: "1em",
                                color: "white"
                            }}
                        >
                            {" "}
                Education{" "}
                        </h2>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <a href="https://www.youtube.com/channel/UCzjeYdI145S8VzGFsODpXoA" target="_blank" style={{ color: 'transparent' }} >
                        <h2
                            style={{
                                fontFamily: "Montserrat,sans-serif",
                                fontSize: "1em",
                                color: "white"
                            }}
                        >
                            {" "}
                About Us{" "}

                        </h2>
                    </a>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <a href="https://d1z38n2ru3n165.cloudfront.net/ver.203/WinZO.apk" id="footer-download-btn" target="_blank" style={{ color: 'transparent' }}>
                        <h2
                            style={{
                                fontFamily: "Montserrat,sans-serif",
                                fontSize: "1em",
                                color: "white"
                            }}
                        >
                            {" "}
                Customer Care{" "}
                        </h2>{" "}
                    </a>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Link to="/terms-conditions" style={{ color: 'transparent' }}>
                        <h2 Link to={"/terms-conditions"}
                            style={{
                                fontFamily: "Montserrat,sans-serif",
                                fontSize: "1em",
                                color: "white"
                            }}
                        >
                            {" "}
                Contact Us{" "}
                        </h2>
                    </Link>
                </Grid>
                <Grid item xs={1} sm={1} md={1} />
            </Grid>

            <Grid container>
                <div className="contain">
                    <div className="box1">
                        <a href="https://www.youtube.com/channel/UCzjeYdI145S8VzGFsODpXoA" id="youtube" target="_blank">
                            <FacebookIcon color="disabled" />
                        </a>
                    </div>

                    <div className="box1">
                        <a href="https://www.instagram.com/winzo_games/" target="_blank">
                            <InstagramIcon color="disabled" />
                        </a>
                    </div>


                    <div className="box1">
                        <a href="https://www.facebook.com/WinZOGames/" target="_blank">
                            <TwitterIcon color="disabled" />
                        </a>
                    </div>

                    <div className="box1">
                        <a href="https://twitter.com/winzogames?lang=en" target="_blank">
                            <FacebookIcon color="disabled" />
                        </a>
                    </div>
                    <div className="box1">
                        <a href="https://twitter.com/winzogames?lang=en" target="_blank">
                            <InstagramIcon color="disabled" />
                        </a>
                    </div>
                    <div className="box1">
                        <a href="https://twitter.com/winzogames?lang=en" target="_blank">
                            <TwitterIcon color="disabled" />
                        </a>
                    </div>
                </div>
            </Grid>



            <br />

            <Hidden smDown>
                <Grid container>
                    <AppBar position="absolute" align='center' style={{ position: 'absolute', paddingTop: '290px', backgroundColor: 'inherit' }}>
                        <img src="https://public-v2links.adobecc.com/0c653836-7184-45e7-6bb2-2380d9949104/component?params=component_id%3A69408bd6-0200-45bb-96b6-9d055e54b2bd&params=version%3A1&token=1593363226_da39a3ee_3a024d02ebe54e153eff8a61e48a4873421464f9&api_key=CometServer1" alt="img18" />
                    </AppBar>
                </Grid>
            </Hidden>
            <Hidden smUp>
                <Grid container>
                    <AppBar position="absolute" align='center' style={{ position: 'absolute', paddingTop: '350px', backgroundColor: 'inherit' }}>
                        <img src="https://public-v2links.adobecc.com/0c653836-7184-45e7-6bb2-2380d9949104/component?params=component_id%3A69408bd6-0200-45bb-96b6-9d055e54b2bd&params=version%3A1&token=1593363226_da39a3ee_3a024d02ebe54e153eff8a61e48a4873421464f9&api_key=CometServer1" alt="img18" />
                    </AppBar>
                </Grid>
            </Hidden>
            <br />
            <br />
            <Grid item xs={12}>
                <h2
                    style={{
                        fontSize: "0.8em",
                        textAlign: "center",
                        fontWeight: "600",
                        color: "white",
                        margin: "55px 0 10px 0",
                        display: "block",
                        fontFamily: "Montserrat,sans-serif"
                    }}
                >

                    <span style={{ color: "white", fontFamily: "Montserrat,sans-serif" }}>© {(new Date().getUTCFullYear())} , WinZO All Right Reserved </span>
                    <Link to="/contact-us" style={{ color: 'transparent' }} >
                        <span className='hov' style={{ color: "white" }}>Contact Us </span>
                    </Link>
                -
               <Link to="/refundpolicy" style={{ color: 'transparent' }}>
                        <span className='hov' style={{ color: "white" }}> Refund / Cancellation Policy </span>
                    </Link>

                </h2>
            </Grid>
        </React.Fragment>
    );
}