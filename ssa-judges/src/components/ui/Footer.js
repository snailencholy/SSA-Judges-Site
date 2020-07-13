import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import logo from "../../assets/Asset 1.png";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.grey,
        Padding: 0,
        marginBottom: 0,
        marginTop: ".25em",
        width: "100%",
        Zindex: 1302,
        position: "relative",
        fontFamily: "Raleway",
    },

    logo: {
        width: "15em",
        height: "2.5em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "5em",
            height: "5em",
        },

        [theme.breakpoints.down("sm")]: {
            width: "3em",
            height: "3em",
        },

        [theme.breakpoints.down("sm")]: {
            width: "3em",
            height: "3em",
        },

    },

    mainContainer: {
        position: "absolute",
    },

    link: {
        color: "black",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "Bold",
        textDecoration: "none",
    },

    gridItem: {
        margin: "1em",
    },

}));

export default function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        
                    </Grid>
                </Grid>
                
                <img alt="logo"
                src={logo}
                className={classes.logo}
                />
        </footer>
    );
}