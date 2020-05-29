import { createMuiTheme } from '@material-ui/core/styles'

const headerBurgundy = "#53120F"
const headerRed  = "#DC2523"
const headerWhite = "#FFFFFF"

export default createMuiTheme({
    palette: {
        common: {
            blue: `${headerBurgundy}`,
            red: `${headerRed}`,
            white: `${headerWhite}`
        },
        primary: {
            main: `${headerBurgundy}`
        },
        secondary: {
            main: `${headerRed}`
        },
    },
    //Trying to force commits
    typography: {
        tab: {
            fontFamily: "Libre Baskerville",
            textTransform: "none",
            fontweight: "400",
            fontSize: "1rem",
        },
    },
    
    logoButton: {
        color: "white",
    },

});
