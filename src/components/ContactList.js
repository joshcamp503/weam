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
import TableRow from '@mui/material/TableRow';

const ContactList = ({ action }) => {

  // CONTACT LIST TABLE
  const createColumns = () => {
    const nameCol = { id: 'name', label: 'Name' }
    const emailCol = { id: 'email', label: 'Email', align: 'left', padding: 'none'}
    // const genderCol = { id: 'gender', label: 'Gender', minWidth: 100, align: 'center', padding: 'none' }
    const inviteCol = { id: 'invite', label: 'Invite?', align: 'right', padding: 'none' }
    const actionCol = { id: 'action', label: 'Action', align: 'center', padding: 'none' }
    if (action === 'invite') {
      // return [nameCol, genderCol, inviteCol]
      return [nameCol, inviteCol]
    } else {
      // return [nameCol, emailCol, genderCol, actionCol]
      return [nameCol, emailCol, actionCol]
    }
  }

  const columns = createColumns()
  
  // GET USER DATA FROM LOCAL STORAGE AND POPULATE TABLE, SORTED ALPHABETICALLY BY NAME
  const { contacts } = JSON.parse(localStorage.getItem('user'))
  contacts.sort((a, b) => a.name.localeCompare(b.name))

  const colWidth = {
    width: "40%"
  }



  return (
    <>
    <Paper sx={{ overflow: 'hidden', mb: "85px" }}>
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ colWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts
              .map((contact) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={contact.name} >
                    {columns.map((column) => {
                      const value = contact[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} padding={column.padding} sx={{ ...colWidth, py: '8px', px: '16px', "& .MuiTableCell-root:nth-of-type(2)": {display: {sm: 'none', md: "block"}} }} >
                          {column.id === 'invite' && 
                            <Field type="checkbox" name="invite" value={contact.email} style={{ marginRight: "15px"}} />
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
    </Paper>

    
    </>
  );
}

export default ContactList