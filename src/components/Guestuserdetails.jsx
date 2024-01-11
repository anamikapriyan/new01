import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

const Guestuserdetails = ({  id, name, age, adress, no }) => {

    const Guestuserdetails ={
        id:1,
        name:'Mery',
        age:25,
        adress:'CBD House',
        no:4567834567
        
    }
     
  


  return (
    <div align="center">
      <Typography>Guestuserdetails</Typography><br/>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
            
         <TableCell></TableCell>
         <TableCell>ID</TableCell>
       <TableCell>Name</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Adress</TableCell>
        <TableCell>No</TableCell>
      
       </TableRow>
       </TableHead>
       <TableCell></TableCell>
      <TableCell>{Guestuserdetails.id}</TableCell>
      <TableCell>{Guestuserdetails.name}</TableCell>
      <TableCell>{Guestuserdetails.age}</TableCell>
      <TableCell>{Guestuserdetails.adress}</TableCell>
      <TableCell>{Guestuserdetails.no}</TableCell>
         
        </Table>
        </TableContainer>
     
     
    </div>
  );
};

export default Guestuserdetails;
