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
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const ContactList = () => {
  // PAGINATION
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // CONTACT LIST TABLE
  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 100, align: 'center', padding: 'none' },
    { id: 'action', label: 'Action', align: 'center', padding: 'none' }
  ];
  
  // GET USER DATA FROM LOCAL STORAGE AND POPULATE TABLE, SORTED ALPHABETICALLY BY NAME
  const { contacts } = JSON.parse(localStorage.getItem('user'))
  contacts.sort((a, b) => a.name.localeCompare(b.name))

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
            {contacts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((contact) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={contact.name} >
                    {columns.map((column) => {
                      const value = contact[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} padding={column.padding} sx={{ py: '8px' }} >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                          {column.id === 'action' && <ProfileActions contact={contact}/>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={contacts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper>

    <AddContact />
    
    </>
  );
}

export default ContactList