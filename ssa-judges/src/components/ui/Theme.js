import { createMuiTheme } from '@material-ui/core/styles'

const headerBlue = "#000FDB"
const headerRed  = "#FF0000"
const headerWhite = "#FFFFFF"

export default createMuiTheme({
    palette: {
        common: {
            blue: `${headerBlue}`,
            red: `${headerRed}`,
            white: `${headerWhite}`
        },
        primary: {
            main: `${headerBlue}`
        },
        secondary: {
            main: `${headerRed}`
        },
    },

    typography: {
        
    },
    
    logoButton: {
        color: "white",
    }

})
