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
            main: `${headerWhite}`
        },
        secondary: {
            main: `${headerNavy}`
        },
    },
    //Trying to force commits
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontweight: "700",
            fontSize: "1rem",
        },
        paragraph: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontweight: "400",
            fontSize: "1rem",

        },
        
        landingPageParagraph: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontweight: "700",
            fontSize: "2rem",

        },

        searchBar: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontweight: "400",
            fontSize: "1rem",
        },
    },
    
    overrides: {
        MuiInputLabel: {
            root: {
                color: headerNavy,
                fontFamily: "Raleway",
                fontWeight: "700",
                borderColor: headerNavy,
            }
        }

        
    }

});
