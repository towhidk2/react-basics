export const validateEmail = (email) => {
    const errors = {};
  
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      errors.email = "Incorrect email format";
    }
  
    return errors.email || ""; // Return error message as a string or an empty string
  };
  
  // Password validation function
  export const validatePassword = (password) => {
    const errors = {};
  
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password should be at least 8 characters";
    }
  
    return errors.password || ""; // Return error message as a string or an empty string
  };
  