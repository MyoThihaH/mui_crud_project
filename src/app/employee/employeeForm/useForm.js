import { useState } from 'react';


export const useForm = (initialFvalues) => {
    const [values, setValues] = useState(initialFvalues);
    const [error, setError ] = useState({});
    const [successOpen, setSuccessOpen] = useState(false);
    const [failOpen, setFailOpen] = useState(false);
    const [confirm, setConfirm] = useState({title:"Are you sure to submit?", subtitle:"This will be add record",open:false, });

    

    const validate = (name, value) => {
        const temp = {...error};
        switch(name){
            case 'fullName': temp.fullName = value.trim()?"":"This field is require";console.log(value);break;
            case 'email': temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)?"":"Email format is wrong";break;
            case 'mobile': temp.mobile = /^[0-9]{9,12}$/.test(value)?"":"Mobile Number should be between (9-12) range";break;
            case 'city': temp.city = value.trim()?"":"This field is require";break;
            case 'departmentId': temp.departmentId = value!=0?"":"None should not be";break;
            default:{
                temp.fullName = values.fullName.trim()?"":"This field is require";console.log(value);
                temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)?"":"Email format is wrong";
                temp.mobile = /^[0-9]{9,12}$/.test(values.mobile)?"":"Mobile Number should be between (9-12) range";
                temp.city = values.city.trim()?"":"This field is require";
                temp.departmentId = values.departmentId!=0?"":"None should not be";
            }
        }

        // temp.fullName = values.fullName?"":"This field is require";
        // temp.email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)?"":"Email format is wrong";
        // temp.mobile = /(\d{9,12})/.test(values.mobile)?"":"Mobile No should be between (9-12) range";
        // temp.city = values.city?"":"This field is require";
        // temp.departmentId = values.departmentId?"":"This field is require";
        setError({
            ...temp
        });
        return Object.values(temp).every(item => item=="") 
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
            setFailOpen,
            confirm,
            setConfirm
        }
    )
}