function validation(formValues){
const errors = {};
const regex = /^[^s@]+@[^s@]+\.[^s@]{2,}$/i;
if(!formValues.username){
    errors.username = "Username is required";
}
if(!formValues.password){
    errors.password = "Password is required";
}
else if(formValues.password.length<5){
        errors.username = "Password is too short";
}
return errors;
}
export default validation;