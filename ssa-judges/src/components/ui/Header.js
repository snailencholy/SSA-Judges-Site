import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, withTheme } from '@material-ui/styles';
import { useMediaQuery, Hidden } from '@material-ui/core';
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
import logo from "../../assets/ssa-alj-stats.png";

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
        
        marginBottom: "8em",

        [theme.breakpoints.down("md")]: {
            marginBottom: "3em"
        },

        [theme.breakpoints.down("sm")]: {
            marginBottom: "5em"
        },

        [theme.breakpoints.down("xs")]: {
            marginBottom: "5em",
            //width: "auto"
            maxWidth: "200px"
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

       [theme.breakpoints.down("md")]: {
           marginLeft: ".25em",
           marginRight: "5em",
       },

       [theme.breakpoints.down("sm")]: {
           marginLeft: ".05em",
           marginRight: "5em",
       }
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
            minWidth: 1,
            fontSize: ".25rem",
            marginLeft: "2em",
            marginRight: "2em",
        },

        [theme.breakpoints.down("sm")]: {
            fontSize: ".25rem",
            minWidth: 0,
            marginLeft: "0.5em",
            marginRight: "0.5em",
        },

        [theme.breakpoints.down("xs")]: {
            marginLeft: "0em",
            marginRight: "0em",
        },    
        
    },

    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent",
        },

        [theme.breakpoints.down("xs")]: {
            marginLeft: "auto",
        },
    },

    drawerIcon: {
        height: "50px",
        width: "50px",
        color: "#041E42",
    },

    drawer: {
        backgroundColor: theme.palette.common.grey,  
        flexShrink: 0, 
    },

    drawerItem: {
        ...theme.typography.tab,
        color: theme.palette.common.navy,
        opacity: 0.7,
    },

    drawerItemSelected: {
        "&.MuiListItemText-root": {
            opacity: 1,
        },
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.common.grey
    },

    navBarParagraph: {
        ...theme.typography.paragraph,
        marginLeft: "3em",
        texttransform: "none",

        [theme.breakpoints.down("md")]: {
            marginRight: "1em"
        },

        [theme.breakpoints.down("sm")]: {
            marginRight: "1em"
        },

        [theme.breakpoints.down("xs")]: {
            marginRight: "0",
            fontSize: ".5rem",
        },
    },
    
    linkStyle: {
        texttransform: "none"
    },
    buttonStyle: {
        backgroundColor: "#999999"
    },
    

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
        //{name: "Disability Help", link: "/disability", activeIndex: 1},
        {name: "About Us", link: "/about", activeIndex: 1},
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
                <Button
                         className={classes.tab}
                         variant="contained"
                         style={{backgroundColor: "#CCCCCC"}}
                        >
                           <a href="https://www.mobiledisabilitylawyer.com/social-security-disability-insurance/do-you-qualify-for-disability/"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                                
                            }}
                           >
                               Do <u><b>YOU</b></u> qualify for <br></br>disability benefits?
                           </a>
                        </Button>
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
    
    // <p 
    //                      className={classes.navBarParagraph}
    //                      breakpoints={"sm" ? ".5rem" : "1rem"}
    //                     >
    //                         <a  
    //                          href="https://www.mobiledisabilitylawyer.com/" 
    //                          style={{
    //                              textDecoration: "none",
    //                              color: "inherit"
    //                          }}
    //                         >
    //                             SEAN F. HAMPTON, ESQ.
    //                         </a><br/><br/>
    //                         (251) 767-7266 <br/><br/>
    //                         sean@hamptonjdlaw.com
    //                     </p>

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar
                className={classes.appBar}
                position="fixed"
                color="primary"
                >
                    <Toolbar disableGutters backgroundColor={theme.palette.common.headerGrey}>
                        <Button
                        component={Link}
                        to="/"
                        onClick={() => props.setValue(0)}
                        //className={classes.logoContainer}
                        >
                            <img alt="company logo" className={classes.logo} src={logo}/>
                        </Button>
                        
                        {matches ? drawer : tabs}
                        <Hidden smDown>
                        <Button
                         className={classes.tab}
                         variant="contained"
                         style={{backgroundColor: "#CCCCCC"}}
                        >
                           <a href="https://www.mobiledisabilitylawyer.com/social-security-disability-insurance/do-you-qualify-for-disability/"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                                
                            }}
                           >
                               Do <u><b>YOU</b></u> qualify for <br></br>disability benefits?
                           </a>
                        </Button>
                        </Hidden>
                        

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}
