import TableTemplate from './TableTemplate';
import { getAllEmployee, deleteEmployee } from '../../../services/employeeServices';



const headCells = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: '_ID ',
  },
  
  {
    id: 'fullName',
    numeric: true,
    disablePadding: true,
    label: 'Full Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: true,
    label: 'Email',
  },
  {
    id: 'mobile',
    numeric: true,
    disablePadding: true,
    label: 'Mobile',
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: true,
    label: 'City',
  },
  {
    id: 'gender',
    numeric: false,
    disablePadding: true,
    label: 'Gender',
  },
  {
    id: 'departmentId',
    numeric: true,
    disablePadding: true,
    label: 'DerpartmentId',
  },
  {
    id: 'hireDate',
    numeric: true,
    disablePadding: true,
    label: 'Hire Date',
  },
  {
    id: 'isPermanent',
    numeric: true,
    disablePadding: true,
    label: 'Permanent',
  },
  {
    id: 'edit',
    numeric: true,
    disablePadding: true,
    label: ""
  }
];




export const EmployeeTable = (props) => {
  const { reRender, setReRender } = props;
  
  
  return(
    <TableTemplate headCells={headCells} rows={getAllEmployee()} reRender={reRender} defaultOrderBy="id" tableName="Employee" deleteEmployee={deleteEmployee} setReRender={setReRender}/>
  )
}
