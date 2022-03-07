const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}



export const getDepartmentCollection = () => ([
    { id: '0', title: 'None'},
    { id: '1', title: 'Devolopment'},
    { id: '2', title: 'Marketing'},
    { id: '3', title: 'Accounting'},
    { id: '4', title: 'HR'},
    
])

export const getAllEmployee = () => {
    if(localStorage.getItem(KEYS.employees) == null) 
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees))
    
}

export const insertEmployee = (data) => {
    data.id = generateId();
    const employee = getAllEmployee();
    employee.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employee))
}

export const generateId = () => {
   if(localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId,'0')
   let id = parseInt(localStorage.getItem(KEYS.employeeId))
   localStorage.setItem(KEYS.employeeId,(++id).toString())
   return id;
}

export const deleteEmployee = ( idArr ) => {
    const employee = getAllEmployee();
    const newEmployee = employee.filter((item) => !idArr.includes(item.id))
    localStorage.setItem(KEYS.employees,JSON.stringify(newEmployee));

}

export const updateEmployee = ( data ) => {
    const employee  = getAllEmployee();
    const d = employee.filter((item, index) => item.id == data.id );
    const index = employee.indexOf(d[0]);
    employee[index] = data;
    localStorage.setItem(KEYS.employees,JSON.stringify(employee));

}