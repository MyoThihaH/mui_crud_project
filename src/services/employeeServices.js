const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}

const initialData = [
    {
        id:1,
        fullName: "a",
        email: "a@gmail.com",
        mobile: "000000000",
        city: "Mawlamyine",
        gender: "male",
        departmentId: "1",
        hireDate: new Date(),
        isPermanent: "true",
    },
    {
        id:2,
        fullName: "b",
        email: "b@gmail.com",
        mobile: "111111111",
        city: "Yangon",
        gender: "male",
        departmentId: "1",
        hireDate: new Date(),
        isPermanent: "true",
    },
    {
        id:3,
        fullName: "c",
        email: "c@gmail.com",
        mobile: "111111111",
        city: "Mandalay",
        gender: "female",
        departmentId: "2",
        hireDate: new Date(),
        isPermanent: "true",
    }      
];

// export const addInitialData = () => {
//     if(localStorage.getItem(KEYS.employees) == null)
//     for(let a of initialData){
//         insertEmployee(a)
//     }
// }


export const getDepartmentCollection = () => ([
    { id: '0', title: 'None'},
    { id: '1', title: 'Devolopment'},
    { id: '2', title: 'Marketing'},
    { id: '3', title: 'Accounting'},
    { id: '4', title: 'HR'},
    
])

export const getAllEmployee = () => {
    if(localStorage.getItem(KEYS.employees) == null) {
        localStorage.setItem(KEYS.employees, JSON.stringify(initialData))
        localStorage.setItem(KEYS.employeeId,(initialData.length).toString())
    }
        
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