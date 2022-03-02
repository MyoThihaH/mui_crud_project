import { useState, useEffect } from 'react';


export const useForm = (initialFvalues) => {
    const [values, setValues] = useState(initialFvalues);
    const [error, setError ] = useState({});
    const [successOpen, setSuccessOpen] = useState(false);
    const [failOpen, setFailOpen] = useState(false);
    

    const validate = (name, value) => {
        const temp = {...error};
        console.log(value)
        
        switch(name){
            case 'fullName': temp.fullName = value.trim()?"":"This field is require";console.log(value);break;
            case 'email': temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)?"":"Email format is wrong";break;
            case 'mobile': temp.mobile = /^[0-9]{9,12}$/.test(value)?"":"Mobile Number should be between (9-12) range";break;
            case 'city': temp.city = value.trim()?"":"This field is require";break;
            case 'departmentId': temp.departmentId = value!=0?"":"None should not be";break;
            
        }
        // temp.fullName = values.fullName?"":"This field is require";
        // temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)?"":"Email format is wrong";
        // temp.mobile = /(\d{9,12})/.test(values.mobile)?"":"Mobile No should be between (9-12) range";
        // temp.city = values.city?"":"This field is require";
        // temp.departmentId = values.departmentId?"":"This field is require";
        setError({
            ...temp
        });
        return Object.values(temp).every(item => item=="") && Object.values(temp).length!=0
    }
    
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        
        setValues({...values,[name]: value});
        validate(name, value)
        
    }        
    return(
        {
            values,
            setValues,
            error,
            setError,
            handleOnChange,
            validate,
            successOpen,
            setSuccessOpen,
            failOpen,
            setFailOpen
        }
    )
}