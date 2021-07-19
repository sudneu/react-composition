export const signup = (values) => {
    if(window.onload !== undefined){
        return localStorage.setItem("authUser", JSON.stringify(values));
    }
}

export const signin = ({email, password}) => {
    let validUser={};

    if(localStorage.getItem("authUser") !== undefined){
        validUser = JSON.parse(localStorage.getItem("authUser"));
    }
    if(validUser.email !== email && validUser.password !== password){
        console.log("Credential missmatch ");
    }
    return validUser;
} 

export const signout = () => {
    return localStorage.removeItem("authUser");
}