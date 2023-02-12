// REACT
// import * as React from 'react';
// MUI
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FormCheckbox from './FormCheckbox';

const CheckboxList = () => {

  // CONTACT LIST TABLE
  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 100, align: 'center', padding: 'none' },
    { id: 'invite', label: 'Invite?', align: 'center', padding: 'none' }
  ];
  
  // GET USER DATA FROM LOCAL STORAGE AND POPULATE TABLE, SORTED ALPHABETICALLY BY NAME
  const { contacts } = JSON.parse(localStorage.getItem('user'))
  contacts.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
    <Paper sx={{ width: '100%', overflow: 'hidden', mb: '200px' }}>
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
            {contacts.map((contact) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={contact.name} >
                  {columns.map((column) => {
                    const value = contact[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} padding={column.padding} sx={{ py: '8px' }} >
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value
                        }
                        {column.id === 'invite' && 
                          <FormCheckbox />
                        }
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
    
    </>
  );
}

export default CheckboxList