import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>({
    paragraphStyle: {
        ...theme.typography.landingPageParagraph,
        marginLeft: "5em",
        marginRight: "5em",
        marginBottom: "10em",

        [theme.breakpoints.down("md")]: {
            marginLeft: "5em",
            marginRight: "5em",
            marginBottom: "10em",
        },

        [theme.breakpoints.down("sm")]: {
            marginLeft: "3em",
            marginRight: "3em",
            marginBottom: "10em",
            fontSize: "1em"
        },

        [theme.breakpoints.down("xs")]: {
            marginLeft: "2em",
            marginRight: "2em",
            marginBottom: "10em",
        }
    },

    mainContainer: {
        width: "100%",
        backgroundColor: theme.palette.common.blue,
        margin: 0,
    },

    bodyStyle: {
        backgroundColor: theme.palette.common.blue,
        marginTop: 0,
        margin: 0,
    },

    root: {
    '& .MuiTextField-root': {
     fontFamily: "Libre Baskerville",
    },
  },

    searchBar: {
        marginLeft: "35em",
        marginRight: "35em",
        marginTop: "1em",

        [theme.breakpoints.down("sm")]: {
            marginLeft: "30em",
            marginRight: "30em",
        },
        
        [theme.breakpoints.down("xs")]: {
            marginLeft: "7.5em",
            marginRight: "7.5em",
            marginTop: "2em",
        },
    },

    RequestButton: {
        fontFamily: "Libre Baskerville",
        textTransform: "none",
        marginBottom: "5em",
        marginLeft: "40em",
        marginRight: "40em",
        borderRadius: 50,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },

        [theme.breakpoints.down("md")]: {
            marginRight: "30em",
            marginLeft: "30em",
        },

        [theme.breakpoints.down("sm")]: {
            marginRight: "20em",
            marginLeft: "20em",
        },

        [theme.breakpoints.down("xs")]: {
            marginRight: "10em",
            marginLeft: "10em",
        },
    }
}))

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();


    return(
        <div className={classes.bodyStyle}>
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid container direction="row" alignItems="center" className={classes.searchBar}>
                    <TextField
                     className={classes.root}
                     label="Judge's Name"
                     type="search"
                     variant="outlined"
                    />
                </Grid>
                <Grid container>
                    <p className={classes.paragraphStyle}>
                        The Hampton Law Firm is an organization that builds cases based
                        on preparedness and proper planning. <br/><br/> In the interest of preparing all
                        potential and current clients we have created this tool which will
                        allow all them to search the Judges disposition by name.<br/><br/>We would like
                        everyone we represent to have realistic expectations of how the judge
                        they have been assigned awards cases. 
                    </p>
                </Grid>
            </Grid>
            <Button 
             variant="contained"
             color="secondary"
             className={classes.RequestButton}
            >
                Click here for help applying for SSA Disability
            </Button>
        </div>
    )
}