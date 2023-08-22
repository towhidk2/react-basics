import React, { useState } from "react";
import { validateEmail, validatePassword } from "./validators";
import "./LoginForm.css";

function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextFormState);
  };

  const clearForm = () => {
    setForm({
      email: "",
      password: "",
      confirmPassword: ""
    });
  };


  const onSubmitForm = (e) => {
    e.preventDefault();

    const validationErrors = {};
    // Use the individual validation functions for each field
    validationErrors.email = validateEmail(form.email);
    validationErrors.password = validatePassword(form.password);

    // Additional logic for confirmPassword validation
    if (form.confirmPassword !== form.password) {
      validationErrors.confirmPassword = "Password not matched";
    }
    setErrors(validationErrors);
    // console.log("Inside Object")
    // alert(JSON.stringify(form, null, 4));
    // clearForm();

      // If there are no validation errors, log the form data
    if (Object.keys(validationErrors).length === 0) {
        console.log("Inside Object")
        alert(JSON.stringify(form, null, 4));
        clearForm();
    }

  };

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
  );
}

export default LoginForm;
