export const dataCheck = (email,password) =>{
    const checkEmail  = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password);

    if(!checkEmail) {
        return "Invalid Email";
    }

    if (!checkPassword){
        return "Invalid Password";
    }

    return null;

}