import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter
} from '@material-ui/core';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



let rows = [];

for(let i=0;i<14;i++) {
  rows[i] = {
      name: "Kunal Badole",
      email: "kunalbadole5@gmail.com",
      phone: 8446389105,
      source: "IITH",
      destination: "Delhi",
      date:"12-12-12",
      time:"06:06"
      
  }
}


export default function DetailsBlock() {


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student Info</StyledTableCell>
            <StyledTableCell align="right">Source</StyledTableCell>
            <StyledTableCell align="right">destination</StyledTableCell>
            <StyledTableCell align="right">Date of Flight</StyledTableCell>
            <StyledTableCell align="right">Time of Flight</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.name} src='.' />
                      </Grid>
                      <Grid item lg={10}>
                          <Typography>{row.name}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                      </Grid>
                  </Grid>
                </StyledTableCell>
              <StyledTableCell align="right">{row.source}</StyledTableCell>
              <StyledTableCell align="right">{row.destination}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
