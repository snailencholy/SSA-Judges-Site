import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableHeaderColumn from '@material-ui/core/Table'
import TableRowColumn from '@material-ui/core/Table';

const OutputTable = (props) => {
    

    let judges = [...props.list];

    const renderTableData = () => {
        return judges.map((output, index) => {
            const { 
                JUDGE, 
                TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES,
                TOTAL_DECISIONS,
                FULLY_FAVORABLE,
                PARTIALLY_FAVORABLE,
                TOTAL_DENIALS
            } = output

            let percentApproved = ((parseInt(FULLY_FAVORABLE) + parseInt(PARTIALLY_FAVORABLE)) / parseInt(TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES))*100
            let percentDenied = ((parseInt(TOTAL_DENIALS))/parseInt(TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES))*100
            let percentDismissed = ((parseInt(TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES)-parseInt(TOTAL_DECISIONS))/parseInt(TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES))*100

            return (
                <tr key={TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES}>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>{JUDGE}</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>{TOTAL_ALJ_DIPOSITIONS_ACROSS_ALL_OFFICES}</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>{TOTAL_DECISIONS}</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>{FULLY_FAVORABLE}</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>{PARTIALLY_FAVORABLE}</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>{TOTAL_DENIALS}</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>{percentApproved.toFixed(2)}</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>{percentDenied.toFixed(2)}</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>{percentDismissed.toFixed(2)}</td>
                </tr>
            )
        })
    }

    //console.log(judges);
    //console.log(renderTableData())
    //const dataTable = props => {
        return(
            <table>
                <thead>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>Name</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>Total Dispositions</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>Total Decisions</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>Fully Favorable Decisons</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>Partially Favorable Decisions</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>Total Denials</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>Percent Approved</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>Percent Denied</td>
                    <td style={{fontFamily: "Raleway", padding: "1em"}}>Percent Dismissed</td>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>
        )
    

}

export default OutputTable;