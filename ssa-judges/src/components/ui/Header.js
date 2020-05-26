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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';


//This is where elements I've made myself will be imported.
import logo from "../../assets/mynewwallpaper.jpg";

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
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },

        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
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
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },

    tabContainer: {
        marginLeft: "auto",
    },

    tab: {
        ...theme.typography,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    },


}));



export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [seclectedIndex ,setSelectedIndex] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    };

    const handleMenuItemClick = (e,i) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(i)
    };

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    };

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
            >
                <Tab></Tab>
            </Tabs>
        </React.Fragment>
    );

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar
                position="fixed"
                color="primary"
                >
                    <Toolbar disableGutters>
                        <Button
                        color="secondary"
                        >
                            <img alt="company logo" className={classes.logo} src={logo}/>
                        </Button>
                    </Toolbar>

                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
}
