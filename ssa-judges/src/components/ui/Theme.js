import { createMuiTheme } from '@material-ui/core/styles'

const headerBurgundy = "#53120F"
const headerNavy = "#041E42"
const headerBlue = "#CFD0F8"
const headerRed  = "#DC2523"
const headerWhite = "#FFFFFF"
const buttonYellow = "#F8DF31"
const headerGrey = "#E6E6E6"

export default createMuiTheme({
    palette: {
        common: {
            burgundy: `${headerBurgundy}`,
            navy: `${headerNavy}`,
            blue: `${headerBlue}`,
            red: `${headerRed}`,
            white: `${headerWhite}`,
            yellow: `${buttonYellow}`,
            grey: `${headerGrey}`,
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
            fontweight: "800",
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
            fontSize: "1.5rem",

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
