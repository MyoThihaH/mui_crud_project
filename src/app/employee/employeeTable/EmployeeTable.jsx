import TableTemplate from './TableTemplate';
import { getAllEmployee } from '../../../services/employeeServices';
import { useState } from 'react'
function createData(name, calories, fat, carbs, protein) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }

const headCells = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },

  {
    id: 'fullName',
    numeric: true,
    disablePadding: false,
    label: 'Full Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'mobile',
    numeric: true,
    disablePadding: false,
    label: 'Mobile',
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: false,
    label: 'City',
  },
  {
    id: 'gender',
    numeric: true,
    disablePadding: false,
    label: 'Gender',
  },
  {
    id: 'departmentId',
    numeric: true,
    disablePadding: false,
    label: 'DerpartmentId',
  },
  {
    id: 'hireDate',
    numeric: false,
    disablePadding: false,
    label: 'Hire Date',
  },
  {
    id: 'isPermanent',
    numeric: true,
    disablePadding: false,
    label: 'Permanent',
  },
];




export const EmployeeTable = (props) => {
  const { reRender } = props;
  
  
  return(
    <TableTemplate headCells={headCells} rows={getAllEmployee()} reRender={reRender}/>
  )
}

