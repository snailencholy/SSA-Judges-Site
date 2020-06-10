import { createMuiTheme } from '@material-ui/core/styles'

const headerBurgundy = "#53120F"
const headerNavy = "#13152A"
const headerBlue = "#CFD0F8"
const headerRed  = "#DC2523"
const headerWhite = "#FFFFFF"
const buttonYellow = "#F8DF31"

export default createMuiTheme({
    palette: {
        common: {
            burgundy: `${headerBurgundy}`,
            navy: `${headerNavy}`,
            blue: `${headerBlue}`,
            red: `${headerRed}`,
            white: `${headerWhite}`,
            yellow: `${buttonYellow}`,
        },
        primary: {
            main: `${headerNavy}`
        },
        secondary: {
            main: `${buttonYellow}`
        },
    },
    //Trying to force commits
    typography: {
        tab: {
            fontFamily: "Libre Baskerville",
            textTransform: "none",
            fontweight: "700",
            fontSize: "1rem",
        },
        paragraph: {
            fontFamily: "Libre Baskerville",
            textTransform: "none",
            fontweight: "400",
            fontSize: "1rem",

        },
        
        landingPageParagraph: {
            fontFamily: "Libre Baskerville",
            textTransform: "none",
            fontweight: "700",
            fontSize: "2rem",

        },

        searchBar: {
            fontFamily: "Libre Baskerville",
            textTransform: "none",
            fontweight: "400",
            fontSize: "1rem",
        },
    },
    
    requestButton: {
        fontFamily: "Libre Baskerville",
        textTransform: "none",
        fontweight: "400",
        fontSize: "1rem",
    }

});
