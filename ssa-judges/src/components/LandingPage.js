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

//JUDGES DATA IMPORT DO NOT TOUCH
import data from './judge-data.json'

const useStyles = makeStyles(theme => ({
  paragraphStyle: {
    ...theme.typography.landingPageParagraph,
    marginLeft: '4.5em',
    marginBottom: '2em',

    [theme.breakpoints.down('md')]: {
      marginLeft: '1em',
      marginRight: '1em',
      marginBottom: '2em'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: '.5em',
      marginRight: '.5em',
      marginBottom: '2em',
      fontSize: '1em'
    },

    [theme.breakpoints.down('xs')]: {
      //marginLeft: '1em',
      //marginRight: '1em',
      marginBottom: '2em'
    }
  },

  closeButton: {
    position: "absolute",
    color: theme.palette.grey[500],
  },

  mainContainer: {
    //width: '100%',
    
    margin: 0
  },

  bodyStyle: {
    
    marginTop: 0,
    margin: 0
  },

  root: {
    '& .MuiTextField-root': {
    },
    marginBottom: "2em",
  },

  searchBar: {
    marginLeft: '55em',
    marginTop: '1em',

    [theme.breakpoints.down('lg')]: {
      marginLeft: '32.5em'
    },

    [theme.breakpoints.down('md')]: {
      marginLeft: '20em'
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: '15em'
    },

    [theme.breakpoints.down('xs')]: {
      marginLeft: '3.5em',
      marginTop: '2em'
    }
  },

  submitButton: {
    maxWidth: '20',
    fontFamily: 'Raleway',
    textTransform: 'none',
    marginBottom: '3.5em',
    //marginRight: '10em',
    marginLeft: '10em',
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
      
      let judge = {
        name: judgeData[index].JUDGE,
        TotalDispositions: judgeData[index].TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES,
        TotalDecisions: judgeData[index].TOTAL_DECISIONS,
        FullyFavorable: judgeData[index].FULLY_FAVORABLE,
        PartiallyFavorable: judgeData[index].PARTIALLY_FAVORABLE,
        TotalDenials: judgeData[index].TOTAL_DENIALS
      }

      let percentApproved = ((129 + 7) / 303)*100

        setOutput(
            <div>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Total Dispositions</TableCell>
                        <TableCell>Total Decisions</TableCell>
                        <TableCell>Fully Favorable Decisons</TableCell>
                        <TableCell>Partially Favorable Decisions</TableCell>
                        <TableCell>Total Denials</TableCell>
                        <TableCell>Percent Approved</TableCell>
                        <TableCell>Percent Denied</TableCell>
                        <TableCell>Percent Dismissed</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={judge.name}>
                          <TableCell component="th" scope="row">
                            {judge.name}
                          </TableCell>
                          <TableCell align="right">{judge.TotalDispositions}</TableCell>
                          <TableCell align="right">{judge.TotalDecisions}</TableCell>
                          <TableCell align="right">{judge.FullyFavorable}</TableCell>
                          <TableCell align="right">{judge.PartiallyFavorable}</TableCell>
                          <TableCell align="right">{judge.TotalDenials}</TableCell>
                          <TableCell align="right">{percentApproved}</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
            </div>
        )


        setOpen(true) //OPENS DIALOG     
      
    } else {
      //active = false
      alert('This search failed.')
    }
  }

  const handleClose = () => {
      setOpen(false)
  }

  return (
    <div className={classes.bodyStyle}>
      <Grid container  className={classes.mainContainer}>
        {/* <div className={classes.searchBar}>Judge's Name</div> */}
        
          <p className={classes.paragraphStyle}>
            Knowing the statistics of the judge assigned to you by Social Security<br></br> 
            can be the difference between receiving or losing your benefits.<br></br>
            With this understanding we have put together this site to help you<br></br>
            find all the information you need. We update this information every month<br></br>
            as Social Security releases new statistics.<br></br><br></br> Simply type your judges Last
            name in the search bar below and click submit. <br></br>
          </p>
       
        <Grid
          container
          direction='row'
          alignItems='center'
          className={classes.searchBar}
        >
          <TextField
            className={classes.root}
            value={name}
            onChange={event => {
              setName(event.target.value)
              //setActive(true)
            }}
            id='judge-search'
            helperText='Last, First'
            label="Judge's Name"
            type='search'
            variant='filled'
          />
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
        <div>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle onClose={handleClose}>
                    Judge
                </DialogTitle>
                <DialogContent>
                    {output}
                </DialogContent>
            </Dialog>
        </div>
      </Grid>
      {/*<Button
        component={Link}
        to='/disability'
        variant='contained'
        color='secondary'
        className={classes.RequestButton}
      >
        Click here for help applying for Disability
      </Button>*/}
    </div>
  )
}
