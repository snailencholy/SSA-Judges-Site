import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'



const useStyles = makeStyles(theme => ({
    paragraphStyle: {
        ...theme.typography.landingPageParagraph,
        marginLeft: "20em",
        marginRight: "20em",
        marginTop: "10em",
        marginBottom: "15em",

        [theme.breakpoints.down('lg')]: {
            marginLeft: "15em",
            marginRight: "15em",
            marginTop: "5em",
            marginBottom: "15em",
        },

        [theme.breakpoints.down('md')]: {
            marginLeft: "10em",
            marginRight: "10em",
            marginTop: "5em",
            marginBottom: "15em",
        },

        [theme.breakpoints.down('sm')]: {
            marginLeft: "5em",
            marginRight: "5em",
            marginTop: "5em",
            marginBottom: "15em",
        },

        [theme.breakpoints.down('xs')]: {
            marginLeft: "2.5em",
            marginRight: "2.5em",
            marginTop: "5em",
            marginBottom: "15em",
        },
    }
}))

export default function About() {

    const classes = useStyles()

    return(
        <Grid container >
            <Grid item>
                <p className={classes.paragraphStyle}>
                    This site was built for information purposes only; it in no way indicates the outcome
                    of any decision by a judge. We take the information from <a 
                    href="https://www.ssa.gov/appeals/DataSets/03_ALJ_Disposition_Data.html" 
                    style={{textDecoration: "none", color: "inherit", fontWeight: "bold"}}>ssa.gov. </a> 
                    After getting the raw data, we process it into a format that is easily understood. This data will
                    be updated on the 29th of every month.<br></br><br></br>
                    This site is owned and operated by the law office of Sean Hampton Esq. No representation is made that the quality of legal services to be performed is greater than the quality of legal services performed by other lawyers. We make no representations as to accuracy, completeness, timeliness, suitability, or validity of any information presented by this site and will not be liable for any errors, omissions, or delays in this information or any losses, injuries or damages arising from its display or use. 
                </p>
            </Grid>
        </Grid>
    )
}
