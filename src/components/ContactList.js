// REACT
import ProfileActions from './ProfileActions'
// FORMIK
import { Field } from 'formik';
// MUI
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const ContactList = ({ action }) => {
  // PAGINATION
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // CONTACT LIST TABLE
  const createActionColumn = () => {
    const inviteCol = { id: 'invite', label: 'Invite?', align: 'center', padding: 'none' }
    const actionCol = { id: 'action', label: 'Action', align: 'center', padding: 'none' }
    if(action === "invite") {
      return inviteCol
    } else {
      return actionCol
    }
  }

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 100, align: 'center', padding: 'none' },
    { id: 'gender', label: 'Gender', minWidth: 100, align: 'center', padding: 'none' },
    createActionColumn()
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
            {contacts
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((contact) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={contact.name} >
                    {columns.map((column) => {
                      const value = contact[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} padding={column.padding} sx={{ py: '8px' }} >
                          {column.id === 'invite' && 
                            <Field type="checkbox" name="invite" value={contact.email} />
                          }
                          {column.id === 'action' ? 
                            <ProfileActions contact={contact}/>
                            : 
                            value
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
      {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={contacts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
    </Paper>

    
    </>
  );
}

export default ContactList