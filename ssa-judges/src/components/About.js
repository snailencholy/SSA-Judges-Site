import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'



const useStyles = makeStyles(theme => ({
    paragraphStyle: {
        ...theme.typography.landingPageParagraph,
        marginLeft: "20em",
        marginRight: "20em",
        marginTop: "10em",
        marginBottom: "15em"
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
                    href="https://www.ssa.gov/appeals/DataSets/04_Disposition_Per_Day_Per_ALJ_Ranking_Report.html" 
                    style={{textDecoration: "none", color: "inherit",}}>ssa.gov. </a> 
                    After getting the raw data we format it into an easily searchable source. This data will
                    be updated on the 29th of every month.<br></br><br></br>
                    This site is owned and operated by the law office of Sean Hampton Esq. <br></br><br></br>
                    No representation is made that the quality of legal services to be performed is greater than the quality of legal services performed by other lawyers.
                </p>
            </Grid>
        </Grid>
    )
}
