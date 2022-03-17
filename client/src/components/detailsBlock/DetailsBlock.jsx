import * as React from 'react';
import {useState,useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';

import {setRows,deleteRow,updateRow} from '../../redux/actions/Actions';
import {useDispatch,useSelector} from 'react-redux';
import {
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter
} from '@material-ui/core';
import axios from 'axios';
import CustomizedDialogs from '../dailog/Dailog';
import {useUserAuth} from '../../context/UserAuthContext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
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



export default function DetailsBlock({home,editing}) {

  console.log(editing);
 // console.log(home);

  const {user} = useUserAuth();

  // const rows = useSelector((state) => state.allRows.rows);
  // const [rowData,setRowData] = useState({});
  const [rows,setRows] = useState([]);

  //to dispatch this current data to the store
  const dispatch = useDispatch();

  //console.log(data);

  const fetchPosts = async () =>{

    console.log("fetching");
    const res = await axios.get("/posts/");
    setRows(res.data);

    if (editing) {
      console.log(rows);
      const arr = res.data.filter((row) => row.username == user.displayName);
      console.log(arr);
      setRows(arr);
    } 

    dispatch(setRows(res.data));

  }

  //fetch all the posts
  useEffect(() => {

    fetchPosts();

    //this will add all the rows that we got from database into the store array

  },[]);

  console.log(rows);

  const handleDelete = async(row) => {

    try{
      await axios.delete(`/posts/${row._id}`, {

        data:{row},

      });
    } catch (err) {
      console.log(err);
    }

  //  console.log(rows.size());
    dispatch(deleteRow(row._id));
  //  console.log(rows.size());
  //  setRowData(rows);
  console.log("fetching call");
    fetchPosts();
    console.log("delete",row);
  }

  const handleEdit = () => {
    fetchPosts();
  }




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
            {!home && (
              <StyledTableCell align="right">Actions</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {home && (rows.map((row) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell>
                  <Grid container>
                      <Grid item lg={3}>
                          <Avatar alt={row.username} src='.' />
                      </Grid>
                      <Grid item lg={9}>
                          <Typography>{row.username}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.mobile}</Typography>
                      </Grid>
                  </Grid>
                </StyledTableCell>
              <StyledTableCell align="right">{row.source}</StyledTableCell>
              <StyledTableCell align="right">{row.destination}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              {!home && (
              <StyledTableCell align="right">
                  <IconButton aria-label="delete"  onClick={() => handleDelete(row)}>
                    <DeleteOutlinedIcon/>
                  </IconButton>
                  <IconButton aria-label="edit" onClick={() => handleEdit(row)}>
                    <CustomizedDialogs editing={editing} id={row._id}/>
                  </IconButton>
              </StyledTableCell>
            )}
            </StyledTableRow>
          )))}
          {!home && (rows.filter(row => row.email === user.email).map((row) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell>
                  <Grid container>
                      <Grid item lg={3}>
                          <Avatar alt={row.username} src='.' />
                      </Grid>
                      <Grid item lg={9}>
                          <Typography>{row.username}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.mobile}</Typography>
                      </Grid>
                  </Grid>
                </StyledTableCell>
              <StyledTableCell align="right">{row.source}</StyledTableCell>
              <StyledTableCell align="right">{row.destination}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              {!home && (
              <StyledTableCell align="right">
                  <IconButton aria-label="delete"  onClick={() => handleDelete(row)}>
                    <DeleteOutlinedIcon/>
                  </IconButton>
                  <IconButton aria-label="edit" onClick={() => handleEdit(row)}>
                    <CustomizedDialogs editing={editing} id={row._id}/>
                  </IconButton>
              </StyledTableCell>
            )}
            </StyledTableRow>
          )))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
