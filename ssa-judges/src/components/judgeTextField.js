import React from 'react'
import TextField from '@material-ui/core'
import { styled } from '@material-ui/core/styles'

const judgeTextField = styled(TextField)({
        background: 'dark grey',
        border: '1px solid black',
        color: 'white',
        padding: '0, 30px',
});

export default function StyledComponents(){
    return <judgeTextField
    id="outlined-search"
    label="Search all judges"
    type="search"
    />
}