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
            <PageHeader title="User" subtitle="This is users" icon={<PeopleIcon/>}/>
            <Paper variant='outlined' sx={{margin: '20px', padding: '10px'}}>
                <EmployeeForm reRender={reRender} setReRender={setReRender}/>
            </Paper>
            <EmployeeTable reRender={reRender} setReRender={setReRender}/>
        </div>
    )
}
