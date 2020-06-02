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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
        marginBottom: "5em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "4em"
        },

        [theme.breakpoints.down("xs")]: {
            marginBottom: "3em"
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
        marginLeft: "10em",
        marginRight: "10em",

        [theme.breakpoints.down("lg")]: {
            marginLeft: "7em",
            marginRight: "7em"
        },

        [theme.breakpoints.down("md")]: {
            marginLeft: "5em",
            marginRight: "5em",
        },

        [theme.breakpoints.down("sm")]: {
            marginLeft: "3em",
            marginRight: "3em",
        },

        
        
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

    drawer: {
        backgroundColor: theme.palette.common.navy
    },

    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7,
    },

    drawerItemSelected: {
        "&.MuiListItemText-root": {
            opacity: 1,
        },
    },

    appBar: {
        zIndex: theme.zIndex.modal +1,
        
    },

    navBarParagraph: {
        ...theme.typography.paragraph,
        marginLeft: "50px"
    }


}));



export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(false)


    
    const handleChange = (e, value) => {
        props.setValue(value);
    };


    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {name: "About Us", link: "/about", activeIndex: 1},
        {name: "Contact Us", link: "/contact", activeIndex: 2}
    ];
    
    
    useEffect(() =>{
        [...routes].forEach(route => {
            switch(window.location.pathname){
                case `${route.link}`:
                    if(props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex)
                        if(route.selectedIndex && route.selectedIndex !== props.selectedIndex) {//check if selectedIndex exists and then check if its the correct index.
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                    default:
                        break;
            }
        })
    }, [props.value, props.selectedIndex, routes, props]);

    const tabs = (
        <React.Fragment>
            <Tabs
            value={props.value}
            onChange={handleChange}
            className={classes.tabContainer}
            indicatorColor="primary"
            >

                {routes.map((route, index) =>(
                    <Tab
                    key={`${route}${index}`}
                    className={classes.tab}
                    component={Link}
                    label={route.name}
                    to={route.link}
                    />
                ))}
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
            classes={{paper: classes.drawer}}
            >
                
                <List disablePadding>
                    {routes.map((route, index) => (
                        <ListItem
                         divider
                         key={`${route}${route.activeIndex}`}
                         button
                         component={Link}
                         to={route.link}
                         selected={props.value === route.activeIndex} //Checks the value of the highlighted tab in the list
                         classes={{selected: classes.drawerItemSelected}}
                         onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}} //Sets the value of the highlighted tab in the list
                        >
                            <ListItemText
                             className={classes.drawerItem}
                             disableTypography
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
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
                classname={classes.appBar}
                position="fixed"
                color="primary"
                >
                    <Toolbar disableGutters>
                        <Button
                        component={Link}
                        to="/"
                        onClick={() => props.setValue(0)}
                        className={classes.logoContainer}
                        >
                            <img alt="company logo" className={classes.logo} src={logo}/>
                        </Button>
                        <p 
                         className={classes.navBarParagraph}
                        >
                            SEAN F. HAMPTON, ESQ.<br/><br/>
                            (251) 767-7266 <br/><br/>
                            sean@hamptonjdlaw.com
                        </p>
                        {matches ? drawer : tabs}

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}
