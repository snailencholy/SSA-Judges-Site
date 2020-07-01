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

//JUDGES DATA IMPORT DO NOT TOUCH
import data from './judge-data.json'

const useStyles = makeStyles(theme => ({
  paragraphStyle: {
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

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  mainContainer: {
    width: '100%',
    
    margin: 0
  },

  bodyStyle: {
    
    marginTop: 0,
    margin: 0
  },

  root: {
    '& .MuiTextField-root': {
      fontFamily: 'Libre Baskerville'
    }
  },

  searchBar: {
    marginLeft: '50em',
    marginRight: '50em',
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
      marginRight: '3.5em',
      marginTop: '2em'
    }
  },

  submitButton: {
    maxWidth: '20',
    fontFamily: 'Raleway',
    textTransform: 'none',
    marginBottom: '2em',
    marginRight: '10em',
    borderRadius: 50,
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
      mraginRight: '3em'
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
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
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

        setOutput(
            <div>
                <p>
                    Name: {judge.name} <br/>
                    Total Dispositions: {judge.TotalDispositions} <br/>
                    Total Decisions: {judge.TotalDecisions}   <br/>
                    Fully Favorable Decisions: {judge.FullyFavorable} <br/>
                    Partially Favorable Decisions: {judge.PartiallyFavorable} <br/>
                    Total Denials: {judge.TotalDenials} <br/>
                </p>
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
      <Grid container direction='column' className={classes.mainContainer}>
        {/* <div className={classes.searchBar}>Judge's Name</div> */}
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
            color='secondary'
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
        <Grid container>
          <p className={classes.paragraphStyle}>
            
          </p>
        </Grid>
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
