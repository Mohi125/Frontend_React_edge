import React from "react";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
  

const FIrstComponent = ({ product }) => {
  // props.name = "new name";  this cant be done...immutable..

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Product Id</StyledTableCell>
              <StyledTableCell align="right">Product Name</StyledTableCell>
              <StyledTableCell align="right">Colors</StyledTableCell>
              <StyledTableCell align="right">Details</StyledTableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {product?.map((row) => (
              <TableRow key={row.product_id}>
                <TableCell>{row.product_id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  {row.color?.map((c) => (
                    <p>{c}</p>
                  ))}
                </TableCell>
                <TableCell>{row.p_details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          ;
        </Table>
      </TableContainer>
    </div>
  );
};

export default FIrstComponent;
