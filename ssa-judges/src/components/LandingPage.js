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
import hAd from '../assets/horizontal-ad-1.png'


//JUDGES DATA IMPORT DO NOT TOUCH
import data from './judge-data.json'

const useStyles = makeStyles(theme => ({
  paragraphStyle: {
    ...theme.typography.landingPageParagraph,
    marginLeft: '.25em',
    marginRight: '22em',
    marginBottom: '5em',

    [theme.breakpoints.down('md')]: {
      //marginLeft: '1em',
      marginRight: '16em',
      marginBottom: '5em'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: '.5em',
      marginRight: '15em',
      marginBottom: '5em',
      //fontSize: '1em'
    },

    [theme.breakpoints.down('xs')]: {
      //marginLeft: '1em',
      marginRight: '1em',
      marginBottom: '2em'
    }
  },

  instructionParagraphStyle: {
    ...theme.typography.landingPageParagraph,
    marginRight: "22em",
    //marginLeft: '4.5em',
    marginBottom: '2em',

    [theme.breakpoints.down('md')]: {
      marginLeft: '1em',
      marginRight: '16em',
      marginBottom: '2em'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: '.5em',
      marginRight: '15em',
      marginBottom: '2em',
      //fontSize: '1em'
    },

    [theme.breakpoints.down('xs')]: {
      marginLeft: '.25em',
      marginRight: '1em',
      marginTop: '8em'
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

    [theme.breakpoints.down("xs")]: {
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

  searchBar: {
    //marginLeft: '20em',
    marginTop: '1em',


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
    marginBottom: '3.5em',
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
      marginLeft: '3em',
      //mraginRight: '3em'
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
  }

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
    const index = judgeData.findIndex(x => x.JUDGE.match(name))
    //let active = isActive
    if (index >= 0) {
      //alert(index)
      let judge = {
        name: judgeData[index].JUDGE,
        TotalDispositions: judgeData[index].TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES,
        TotalDecisions: judgeData[index].TOTAL_DECISIONS,
        FullyFavorable: judgeData[index].FULLY_FAVORABLE,
        PartiallyFavorable: judgeData[index].PARTIALLY_FAVORABLE,
        TotalDenials: judgeData[index].TOTAL_DENIALS
      }


      let percentApproved = ((parseInt(judge.FullyFavorable) + parseInt(judge.PartiallyFavorable)) / parseInt(judge.TotalDispositions))*100
      let percentDenied = ((parseInt(judge.TotalDenials))/parseInt(judge.TotalDispositions))*100
      let percentDismissed = ((parseInt(judge.TotalDispositions)-parseInt(judge.TotalDecisions))/parseInt(judge.TotalDispositions))*100

        setOutput(
            <div>
                <TableContainer component={Paper}>
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
                        <TableRow key={judge.name}>
                          <TableCell component="th" scope="row">
                            {judge.name}
                          </TableCell>
                          <TableCell align="center">{judge.TotalDispositions}</TableCell>
                          <TableCell align="center">{judge.TotalDecisions}</TableCell>
                          <TableCell align="center">{judge.FullyFavorable}</TableCell>
                          <TableCell align="center">{judge.PartiallyFavorable}</TableCell>
                          <TableCell align="center">{judge.TotalDenials}</TableCell>
                          <TableCell align="center">{percentApproved.toFixed(2)}</TableCell>
                          <TableCell align="center">{percentDenied.toFixed(2)}</TableCell>
                          <TableCell align="center">{percentDismissed.toFixed(2)}</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
            </div>
        )


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
            Simply type your judges name in the format (last name, first name) in the search bar below and click submit. <br></br>
          </p>
          </Grid>
          <Grid container direction="row">
          <Grid item>
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
            Knowing the statistics of the judge assigned to you by Social Security 
            can be the difference between receiving or losing your benefits.
            With this understanding we have put together this site to help you
            find all the information you need. We update this information every month
            as Social Security releases new statistics.<br></br><br></br> 
          </p>
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
