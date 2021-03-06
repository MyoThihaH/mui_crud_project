import PeopleIcon from '@mui/icons-material/People';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

import EmployeeForm from "./employeeForm/EmployeeForm";
import { PageHeader } from "./PageHeader";
import { EmployeeTable } from "./employeeTable/EmployeeTable";

export const Employee = () => {
    const [reRender, setReRender] = useState(true);
    return(
        <div>
            <PageHeader title="Admin" subtitle="This is admin panel" icon={<PeopleIcon/>}/>
            
            <EmployeeTable reRender={reRender} setReRender={setReRender}/>
        </div>
    )
}
