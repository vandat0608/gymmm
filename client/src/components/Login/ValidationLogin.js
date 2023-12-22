function Validation(values) {
    let errors = [];
    // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passsword_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    // if (values.email === "") {
    //     errors.email = " Email should not be empty";
    // }
    // else if (!email_pattern.test(values.email)) {
    //     errors.email = "Email did not match"
    // }
    // else {
    //     errors.email = ""
    // }

    if (values.name === "") {
        errors.name = "Name should not be empty"
    } else {
        errors.name = ""
    }
    if (values.password === "") {
        errors.password = " Password should not be empty"
    } else if (!passsword_pattern.test(values.password)) {
        errors.password = "Password did not match"
    } else {
        errors.password = ""
    }
    return errors;
}
export default Validation;