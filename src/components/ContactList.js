// REACT
import * as React from 'react';
import AddContact from './modals/AddContact';
import ProfileActions from './ProfileActions'
// MUI
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ContactList = () => {
  // PAGINATION
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // CONTACT LIST TABLEDS
  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 100, align: 'center', padding: 'none' },
    { id: 'action', label: 'Action', align: 'center', padding: 'none' }
  ];
  
  const createData = (name, email) => {
    return { name, email };
  }
  
  const rows = [
    createData('Tito Sanchez', '(123)456-7890'),
    createData('Ann Onymous', '(987)654-3210')
  ];

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} padding={column.padding} sx={{ py: '8px' }} >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                          {column.id === 'action' && <ProfileActions />}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

    <AddContact />
    
    </>
  );
}

export default ContactList