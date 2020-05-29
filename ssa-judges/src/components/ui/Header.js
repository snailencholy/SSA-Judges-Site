import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, withTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


//This is where elements I've made myself will be imported.
import logo from "../../assets/LOGO-BLUE_YELLOW.png";

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });


    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3.5em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2.5em"
        },

        [theme.breakpoints.down("xs")]: {
            marginBottom: "2em"
        },
    },

    logo: {
        height: "8em", 
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        },
    },

    logoContainer: {
        Padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },

    tabContainer: {
       marginLeft: "auto",
    },

    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "50px",
        marginRight: "50px",
        
    },

    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent",
        },
    },

    drawerIcon: {
        height: "50px",
        width: "50px",
    },

    navBarParagraph: {
        ...theme.typography.paragraph,
        marginLeft: "50px"
    }


}));

// did a thing

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(false)


    const [value, setValue] = useState(0);
    
    const handleChange = (e, value) => {
        setValue(value);
    };

    
    //Trying to force a git push
    useEffect(() =>{
        switch(window.location.pathname){
            case "/": 
                if (value !== 0) {
                    setValue(0)
                }
                break;
            case "/about":
                if (value !== 1) {
                    setValue(1)
                }
                break;
            case "/contact":
                if (value !==2) {
                    setValue(2)
                }
                break;
            default:
                break;
        }
    }, [value]);

    const tabs = (
        <React.Fragment>
            <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
            indicatorColor="primary"
            >
                <Tab
                 className={classes.tab}
                 component={Link}
                 to="/"
                 label="Home"
                />
                <Tab
                 className={classes.tab}
                 component={Link}
                 to="/about"
                 label="About Us"
                />
                <Tab
                 className={classes.tab}
                 component={Link}
                 to="/contact"
                 label="Contact Us"
                />
                
            </Tabs>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen = {() => setOpenDrawer}
            >
                Example Drawer
            </SwipeableDrawer>
            <IconButton
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar
                position="fixed"
                color="primary"
                >
                    <Toolbar disableGutters>
                        <Button
                        component={Link}
                        to="/"
                        onClick={() => setValue(0)}
                        className={classes.logoContainer}
                        >
                            <img alt="company logo" className={classes.logo} src={logo}/>
                        </Button>
                        <p 
                         className={classes.navBarParagraph}
                        >
                            SEAN F. HAMPTON, ESQ.
                        </p>
                        {matches ? drawer : tabs}

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}
