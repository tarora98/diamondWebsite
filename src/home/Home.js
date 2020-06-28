import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import slider from './slider';
import Footer from './Footer';
import cardimage from '../image/cards.jpg';
import Coverflow from 'react-coverflow';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import photoframe from './photoframe';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const theme = createMuiTheme();

theme.typography.h6 = {
    color: 'pink'
};


const useStyles = makeStyles((theme) => ({
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
    root: {
        maxWidth: 300,
        flexGrow: 1,
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
    sidebar: {
        backgroundColor: 'red',
        height: '500px',
        width: 'auto',
        position: 'relative',
        Top: '350px',
    },
    uparbar: {
        position: 'absolute'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },



}));
const cards = [1, 2, 3, 4];
const headerinfo = ['Wedding', 'engement', 'hello', 'cdc'];
const info = ['Wedding1', 'engement1', 'hello1', 'cdc1'];

export default function Album(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.heroButtons}>
                <AppBar position="fixed" color="black" className={classes.heroButtons} >
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.title} variant="h1" display="inline" component="p" gutterBottom noWrap>
                            dimend
                                    <Typography className={classes.title2} variant="overline" display="inline" gutterBottom noWrap>
                                SCAASI
                                    </Typography>
                        </Typography>
                        <Typography className={classes.title1} variant="subtitle1" display="inline" gutterBottom >
                            Diamonds
                                <Typography className={classes.title1} variant="subtitle1" display="inline" fontWeight="fontWeightBold">
                                Accessories
                                <Typography className={classes.title1} variant="subtitle1" display="inline" gutterBottom >
                                    Fine Jewelery
                                <Typography className={classes.title1} variant="subtitle1" display="inline" gutterBottom >
                                        WATCHES
                                </Typography>
                                </Typography>
                            </Typography>
                        </Typography>
                        <IconButton aria-label="search" color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <PersonIcon />
                        </IconButton>

                    </Toolbar>

                </AppBar>
            </div>
            <main>
                <div className={classes.heroContent1}>
                    <Container maxWidth="sm">
                        <Typography component="h1" className={classes.fontsize} variant="h6" align="center" color="textPrimary" gutterBottom>
                            Our Collections
            </Typography>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h6" align="center" paragraph>
                                Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely.
            </Typography>
                        </ThemeProvider>
                    </Container>
                </div>

                <Container maxWidth="lg">
                    <Grid container spacing={3} >
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h6" component="h2" align="center" paragraph>
                                            Accessories
                                        </Typography>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="body" component="h6" align="center" >
                                                EveryDiamond in our Collections
                                        </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <div className={classes.heroContent1}>
                    <Container maxWidth="sm">
                        <Typography component="h1" className={classes.fontsize} variant="h6" align="center" color="textPrimary" gutterBottom>
                            EXPLORE LOOSE DIAMONDS
            </Typography>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h6" align="center" color="red" paragraph>
                                Every diamond in our collection is selected for its superior
                                cut, symmetry and shape.
            </Typography>
                        </ThemeProvider>
                    </Container>
                </div>
                <div className={classes.heroContent1} style={{ backgroundColor: 'white' }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Coverflow
                                height={300}
                                displayQuantityOfSide={2}
                                navigation={true}
                                enableHeading={false}
                            >
                                <div
                                    // onClick={() => fn()}
                                    // onKeyDown={() => fn()}
                                    role="menuitem"
                                    tabIndex="100"
                                >
                                    <img
                                        src="https://source.unsplash.com/random"
                                        alt='title or description'
                                        style={{ display: 'inline', width: '80%' }}
                                    />
                                </div>
                                <img src="https://source.unsplash.com/random" alt='title or description' />
                                <img src="https://source.unsplash.com/random" alt='title or description' />
                                <img src="https://source.unsplash.com/random" alt='title or description' />
                                <img src="https://source.unsplash.com/random" alt='title or description' />
                                <img src="https://source.unsplash.com/random" alt='title or description' />
                                <img src="https://source.unsplash.com/random" alt='title or description' />
                            </Coverflow>
                        </Grid>
                    </Grid>
                </div>
                <MobileStepper
                    variant="dots"
                    steps={5}
                    position="fixed"
                    activeStep={activeStep}
                    className={classes.root} style={{ margin: '0 auto' }}
                />

            </main>
            <footer className={classes.footer}>
                <div className={classes.heroContent1}>
                    <Container maxWidth="sm">
                        <Typography component="h1" className={classes.fontsize} variant="h6" color="textPrimary" gutterBottom>
                            Keep In Touch
            </Typography>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h6" color="red" paragraph>
                                Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely.
            </Typography>
                            <Typography variant="h6" color="red" paragraph>
                                <TextField id="standard-basic" label="Enter your email Id" />
                            </Typography>
                        </ThemeProvider>
                        <Typography variant="h6"  paragraph>
                            <Button variant="contained" color="BLACK" >
                                Sign Up
                        </Button>
                        </Typography>
                    </Container>
                </div>
            </footer>
            {Footer()}
            <MobileStepper
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="large" onClick={handleNext} disabled={activeStep === 2} navigation={true} KeyboardArrowLeft={true}>
                        Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="large" onClick={handleBack} disabled={activeStep === 0} KeyboardArrowRight={true}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
                }
            />
        </React.Fragment >
    );
}