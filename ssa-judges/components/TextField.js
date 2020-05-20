import React from 'react';
import TextField from "@material-ui/core/TextField";

const TextFieldStyle = {
    margin = '40px',
    border = 'solid blue',
    textAlign = 'center',
    backgroundcolor = 'darkgrey',
    color = 'black'
};

const search = () => (
    <TextField style={TextFieldStyle}
        id="filled-search"
          label="Search Judges"
          type="Search"
          variant="outlined"
    />
);

export default search;