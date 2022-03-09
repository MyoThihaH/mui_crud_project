import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import { EnhancedTableHead } from './EnhancedTableHead'
import { Control } from '../employeeForm/components/control';
import { SearchBox } from './components/SearchBox';
import { EditButton } from './components/EditButton';
import EmployeeForm from "../employeeForm/EmployeeForm";





function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable(props) {
  const { headCells, rows, defaultOrderBy, tableName, deleteEmployee, setReRender, reRender } = props;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [filterValue, setFilterValue] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [initialFvalues, setInitialFvaluse] = React.useState(null);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  
  const handleEditClick = (event, initialItem) => {
    setInitialFvaluse(initialItem)
    setDialogOpen(true)  
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    console.log(event)
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  
  };

  const searchBoxFilter = (data, searchValue) => {
    if(searchValue === ""){
      return data;
    } else {
      return data.filter((item) => item.fullName.toLowerCase().startsWith(searchValue.toLowerCase()))
    }
  };

  const handleSearchOnChange = (event) => {
      setFilterValue(event.target.value)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddClick = () => {
    setDialogOpen(true);
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '98%', mb: 2, border:'2px solid #f7f3f2 !important', padding:'10px', margin:'10px 10px 10px 10px' }}>
        <Stack direction="row-reverse" spacing={2}>
          <Control.Button startIcon={<AddIcon/>} onClick={handleAddClick}>Add</Control.Button>
          <SearchBox sx={{width:"90%"}} onChange={handleSearchOnChange} placeHolder="Search by Full Name" value={filterValue}/>
          
        </Stack>
        
        <EnhancedTableToolbar numSelected={selected.length} tableName={tableName} selected={selected} deleteEmployee={deleteEmployee} setReRender={setReRender} reRender={reRender} setSelected={setSelected}/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(searchBoxFilter(rows,filterValue), getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Tooltip title="select">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.id)}
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                        </Tooltip>

                      </TableCell>
                      {Object.keys(row).map((key) => {
                        return <TableCell align="center" key={key}>{row[key]}</TableCell>
                      })}
                      <TableCell align="center">
                        
                          <EditButton onClick={(e) => handleEditClick(e, row)} toolTip="Edit"/>
                        
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Control.Dialog open={dialogOpen} maxWidth="md">
            <Stack direction="row-reverse" spacing={37}>
              <DialogActions>
                <Control.Button onClick={() => {setDialogOpen(false);setInitialFvaluse(null) }}>Close</Control.Button>
              </DialogActions>
              <DialogTitle>Employee Form</DialogTitle>
            </Stack>
            <DialogContent sx={{width: '90%'}}>
              <EmployeeForm initialValues={initialFvalues} reRender={reRender} setReRender={setReRender}/>
            </DialogContent>
            
        </Control.Dialog>
       
       
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
