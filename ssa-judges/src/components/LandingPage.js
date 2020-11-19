import React, { useState } from 'react'
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import vAd from '../assets/vertical-ad.png'
import hAd from '../assets/horizontal-ad-2.png'
import OutputTable from './OutputTable';


//JUDGES DATA IMPORT DO NOT TOUCH
import data from '../judge.json'

const useStyles = makeStyles(theme => ({
  paragraphStyle: {
    ...theme.typography.landingPageParagraph,
    marginLeft: '.25em',
    

    [theme.breakpoints.down("xl")]: {
      //marginLeft: "2.5em",
      marginRight: "25em",
      marginBottom: "5em",
      fontSize: "2em",
    },

    [theme.breakpoints.down("lg")]: {
      //marginLeft: "2.5em",
      marginRight: '22em',
      marginBottom: '2em',
      fontSize: "2em",
    },

    [theme.breakpoints.down('md')]: {
      //marginLeft: '1em',
      marginRight: '16em',
      marginBottom: '1em'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: '.5em',
      marginRight: '15em',
      marginBottom: '.5em',
      //fontSize: '1em'
    },

    [theme.breakpoints.down('xs')]: {
      //marginLeft: '1em',
      marginRight: '1em',
      marginBottom: '.25em',
      fontSize: '1rem'
    },
    
  },

  loudParagraphStyle: {
    ...theme.typography.landingPageParagraph,
    marginLeft: '.25em',
    

    [theme.breakpoints.down("xl")]: {
      //marginLeft: "2.5em",
      marginRight: "25em",
      marginBottom: "5em",
      fontSize: "2em",
    },

    [theme.breakpoints.down("lg")]: {
      //marginLeft: "2.5em",
      marginRight: '22em',
      marginBottom: '1em',
      fontSize: "2em",
    },

    [theme.breakpoints.down('md')]: {
      //marginLeft: '1em',
      marginRight: '16em',
      marginBottom: '.5em'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: '.5em',
      marginRight: '15em',
      marginBottom: '.25em',
      //fontSize: '1em'
    },

    [theme.breakpoints.down('xs')]: {
      //marginLeft: '1em',
      marginRight: '1em',
      marginBottom: '25em',
      fontSize: '1rem'
    },
    
  },

  instructionParagraphStyle: {
    ...theme.typography.landingPageParagraph,
    marginRight: "25em",
    //marginLeft: '4.5em',
    marginBottom: '2em',

    [theme.breakpoints.down("xl")]: {
      //marginLeft: "2.5em",
      marginRight: "25em",
      marginBottom: "2em",
      fontSize: "2em",
    },

    [theme.breakpoints.down('md')]: {
      marginLeft: '1em',
      marginRight: '16em',
      marginBottom: '2em'
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: '10em',
      marginLeft: '.5em',
      //marginRight: '15em',
      marginBottom: '2em',
      //fontSize: '1em'
    },

    [theme.breakpoints.down('xs')]: {
      //marginLeft: '.25em',
      marginRight: '1em',
      marginTop: '8em',
      marginBottom: "2em",
      fontSize: "1em"
    }
  },

  closeButton: {
    position: "absolute",
    color: theme.palette.grey[500],
  },

  mainContainer: {
    //width: '100%',
    
    margin: 0,
    padding: 0,
  },

  bodyStyle: {
    backgroundImage: `url(${vAd})`,
    backgroundPosition: "right",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",

    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${hAd})`,
      backgroundPosition: "0 0.25em",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "scroll",
    },

    height: "100%",
    width: "100%",
    marginTop:0,
    marginBottom:0,
  },

  root: {
    '& .MuiTextField-root': {
    },
    marginBottom: "2em",
    
    
  },

  searchItem: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2.5em"
    }
  },

  searchBar: {
    //marginLeft: '20em',
    marginTop: '1em',

    [theme.breakpoints.down('xl')]: {
      marginLeft: "5em"
    },

    [theme.breakpoints.down('lg')]: {
      marginLeft: '5em'
    },

    [theme.breakpoints.down('md')]: {
      marginLeft: '2.5em'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: '1.5em'
    },

    [theme.breakpoints.down('xs')]: {
      marginLeft: '.5em',
      marginTop: '2em'
    }
  },

  submitButton: {
    maxWidth: '20',
    fontFamily: 'Raleway',
    textTransform: 'none',
    marginBottom: '1em',
    marginTop: ".75em",
    //marginRight: '10em',
    marginLeft: '5em',
    borderRadius: 50,
    backgroundColor: theme.palette.common.navy,
    color: "white",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },

    [theme.breakpoints.down('lg')]: {
      marginLeft: '3em'
    },

    [theme.breakpoints.down('md')]: {
      marginLeft: '3em'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: '3em'
    },

    [theme.breakpoints.down('xs')]: {
      marginLeft: '8.75em',
    }
  },

  RequestButton: {
    maxWidth: '20',
    fontFamily: 'Libre Baskerville',
    textTransform: 'none',
    marginBottom: '5em',
    marginLeft: '52.5em',
    borderRadius: 50,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },

    [theme.breakpoints.down('lg')]: {
      marginLeft: '42.5em'
    },

    [theme.breakpoints.down('md')]: {
      marginLeft: '35em'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: '30em'
    },

    [theme.breakpoints.down('xs')]: {
      marginLeft: '.5em',
      mraginRight: '.25em'
    }
  },

  outputContainer: {
    ...theme.typography.landingPageParagraph,
    marginLeft: '5em',
    marginRight: '5em',
    marginBottom: '10em',

    [theme.breakpoints.down('md')]: {
      marginLeft: '5em',
      marginRight: '5em',
      marginBottom: '10em'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: '3em',
      marginRight: '3em',
      marginBottom: '10em',
      fontSize: '1em'
    },

    [theme.breakpoints.down('xs')]: {
      marginLeft: '2em',
      marginRight: '2em',
      marginBottom: '10em'
    }
  },

  AdSpace: {
    flex: "end",
    marginLeft: "auto",
  },

  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "10em",
    marginRight: "10em",
    marginBottom: "2em",

    [theme.breakpoints.down("lg")]: {
        marginLeft: "10em",
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

}))

const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        
      </MuiDialogTitle>
    );
  });


  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

export default function LandingPage (props) {

  const classes = useStyles()
  const theme = useTheme()
  const [name, setName] = useState('')
  //const [isActive, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const [output, setOutput] = useState("")

  const stringData = JSON.stringify(data)
  const judgeData = JSON.parse(stringData)

  const checkJudge = () => {
    //console.log(judgeData);
    let list = []

    for (let i = 0; i < judgeData.length; i ++ ) {
      //list.push(judgeData[i]);
      let lowered = judgeData[i].JUDGE.toLowerCase();
      if (lowered.includes(name.toLowerCase())) {
        list.push(judgeData[i]);
      }
      //console.log(list);
    }

    /* 
    Planned refactor for this includes mapping the above list of results
    to a table instead of building one object. 
    This should return all instances of a name if there are multiple entries 
    for the same person.  
     */
    
    //console.log(list);
    const index = judgeData.findIndex(x => x.JUDGE.match(name))
    //let active = isActive
    if (list.length > 0) {

      
      //alert(index)
      // let judge = {
      //   name: judgeData[index].JUDGE,
      //   TotalDispositions: judgeData[index].TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES,
      //   TotalDecisions: judgeData[index].TOTAL_DECISIONS,
      //   FullyFavorable: judgeData[index].FULLY_FAVORABLE,
      //   PartiallyFavorable: judgeData[index].PARTIALLY_FAVORABLE,
      //   TotalDenials: judgeData[index].TOTAL_DENIALS
      // }

      // let percentApproved = ((parseInt(judge.FullyFavorable) + parseInt(judge.PartiallyFavorable)) / parseInt(judge.TotalDispositions))*100
      // let percentDenied = ((parseInt(judge.TotalDenials))/parseInt(judge.TotalDispositions))*100
      // let percentDismissed = ((parseInt(judge.TotalDispositions)-parseInt(judge.TotalDecisions))/parseInt(judge.TotalDispositions))*100

        
      //     const judgeMap = list.map((data, index) => {
      //       let percentApproved = ((parseInt(data.FULLY_FAVORABLE) + parseInt(data.PARTIALLY_FAVORABLE)) / parseInt(data.TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES))*100
      //       let percentDenied = ((parseInt(data.TOTAL_DENIALS))/parseInt(data.TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES))*100
      //       let percentDismissed = ((parseInt(data.TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES)-parseInt(data.TOTAL_DECISIONS))/parseInt(data.TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES))*100
      
          setOutput(
            <div>
              {/* Changed the table into an external component so 
                  that it can be generated and give every result
                  more easily.
              */}
              <OutputTable list={list}/>


                {/* <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Total Dispositions</TableCell>
                        <TableCell align="center">Total Decisions</TableCell>
                        <TableCell align="center">Fully Favorable Decisons</TableCell>
                        <TableCell align="center">Partially Favorable Decisions</TableCell>
                        <TableCell align="center">Total Denials</TableCell>
                        <TableCell align="center">Percent Approved</TableCell>
                        <TableCell align="center">Percent Denied</TableCell>
                        <TableCell align="center">Percent Dismissed</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {data.JUDGE}
                          </TableCell>
                          <TableCell align="center">{data.TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES}</TableCell>
                          <TableCell align="center">{data.TOTAL_DECISIONS}</TableCell>
                          <TableCell align="center">{data.FULLY_FAVORABLE}</TableCell>
                          <TableCell align="center">{data.PARTIALLY_FAVORABLE}</TableCell>
                          <TableCell align="center">{data.TOTAL_DENIALS}</TableCell>
                          <TableCell align="center">{percentApproved.toFixed(2)}</TableCell>
                          <TableCell align="center">{percentDenied.toFixed(2)}</TableCell>
                          <TableCell align="center">{percentDismissed.toFixed(2)}</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer> */}
            </div>
          )
            //})
        


        setOpen(true) //OPENS DIALOG     
      
    } else {
      //active = false
      alert('The search returned no results. Please make sure you have everything spelled correctly and try again.')
    }
  }

  const handleClose = () => {
      setOpen(false)
  }

  return (
    <div className={classes.bodyStyle}>
      <Grid container direction="row" className={classes.mainContainer}>       
        <Grid
          container
          direction='column'
          className={classes.searchBar}
        >
          <Grid item>
          <p className={classes.instructionParagraphStyle}>
          This site displays a Social Security Administative Law Judge's disposition 
          data for the current year. It displays the number of fullly favorable decisions,
          partially favorable decisions, and unfavorable decisions issued by an ALJ in an easy-to-read format.
          For information on a particular ALJ simply type 
          his/her name in the space below and hit submit. <br></br>
          </p>
          </Grid>
          <Grid container direction="row">
          <Grid item className={classes.searchItem}>
            <TextField
              className={classes.root}
              value={name}
              onChange={event => {
                setName(event.target.value)
                //setActive(true)
              }}
              id='judge-search'
              label="Judge's Name"
              type='search'
              helperText="Last name, First name"
              variant='filled'
            />
          </Grid>
          
          <Grid item>
            <Button
              id='submit'
              disabled={name.length === 0}
              onClick={() => {
                checkJudge()
              }}
              variant='contained'
              color={theme.palette.common.navy}
              className={classes.submitButton}
            >
              Submit
            </Button>
          </Grid>
          </Grid>
         
          <Grid item>
          <p className={classes.paragraphStyle}>
            This Site should be used for informational purposes only and should
            not be used to predict the outcome of a particular case.              
            <br></br><br></br> 
          </p>
          <p className={classes.loudParagraphStyle}>
            NEED HELP WITH YOUR DISABILITY CASE?  
            CLICK BELOW.
          </p>
          </Grid> 
          <Grid item>
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
               <b>DISABILITY HELP</b>
              </a>
            </Button>
          </Grid>         
        </Grid>
        <div>
            <Dialog onClose={handleClose} open={open} fullWidth maxWidth="xl">
                <DialogTitle onClose={handleClose}>
                    SSA ALJ Judge Data
                </DialogTitle>
                <DialogContent>
                    {output}
                </DialogContent>
            </Dialog>
        </div>
      </Grid>
      </div>  
  )
}
