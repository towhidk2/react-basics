import { useState } from "react";
import styles from "./LoginForm.css"


function LoginForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const [errors, setErrors] = useState({})

    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextFormState)
    }

    const clearForm = () => {
        setForm({
            email: "",
            password: "",
            confirmPassword: ""
        });
      };

    const onSubmitForm = e => {
        e.preventDefault();

        const validationErrors = {}
        if(!form.email.trim()){
            validationErrors.email = "Email is required"
        } else if (!new RegExp(/\S+@\S+\.\S+/).test(form.email)) {
            validationErrors.email = "Incorrect email format"
        }

        if(!form.password.trim()){
            validationErrors.password = "Password is required"
        } else if (form.password.length < 8){
            validationErrors.password = "Password should be at least 8 characters"
        }

        if(form.confirmPassword !== form.password){
            validationErrors.confirmPassword = "Password not matched"
        }

        setErrors(validationErrors)

        if(Object.keys(validationErrors).length === 0){
            alert(JSON.stringify(form, null, 4));
            clearForm();
        }


    }


    return (
        <form onSubmit={onSubmitForm}>
            <div className="formGroup">
                <label>Email</label>
                <input type="text" name="email" value={form.email} onChange={onUpdateField} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="formGroup"> 
                <label>Password</label>
                <input type="password" name="password" value={form.password} onChange={onUpdateField} />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <div className="formGroup">
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={onUpdateField} />
                {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}


export default LoginForm;