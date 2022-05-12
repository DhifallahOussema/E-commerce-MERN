import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';

import {ArticleService} from '../../Services/Article-Service';
import { useState,useEffect } from 'react';

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





const Listarticles = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  useEffect(() => {
    GetListArticles();
  
    }); 
  
    const GetListArticles=()=>{
        
      ArticleService.fetchArticles()
          .then((res) => {
            setArticles(res.data);
             
          });
      }


      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
  return (
    <div>
      <Paper sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Référence</StyledTableCell>
            <StyledTableCell >Désignation</StyledTableCell>
            <StyledTableCell >Marque</StyledTableCell>
            <StyledTableCell >Quantité en stock</StyledTableCell>
            <StyledTableCell>Prix</StyledTableCell>
            <StyledTableCell >image</StyledTableCell>
            <StyledTableCell >Catégorie</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <StyledTableRow key={row.reference}>
              <StyledTableCell component="th" scope="row">
                {row.reference}
              </StyledTableCell>
              <StyledTableCell align="right">{row.designation}</StyledTableCell>
              <StyledTableCell align="right">{row.marque}</StyledTableCell>
              <StyledTableCell align="right">{row.qtestock}</StyledTableCell>
              <StyledTableCell align="right">{row.prixVente}</StyledTableCell>
              <StyledTableCell align="right"><img src={`${row.imageartpetitf}`} alt="" width="100"/></StyledTableCell>
              <StyledTableCell align="right">{row.categorieID.nomcategorie}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={articles.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  )
}

export default Listarticles

