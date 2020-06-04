import axiosInstance from "./axiosInstance";


const notify = (message: string) => {
    console.log(message);
}

/**
*  @description :  Function Handle axiosErrors.
*/
const errorHelper = (error: any, variant: String) => {
    if (error.response === undefined) {
        notify("Network Error");
        return false;
    }
    if (error.response.statusCode === 401) {
        if (variant === "login")
            return notify("Invalid Credentials");
        notify("You may have been logged out");
        return false;
    }
    if (error.response.data.statusCode === 401) {
        if (variant === "login")
            return notify("Invalid Credentials");
        notify("You may have been logged out");
        return false;
    }
    if (error.response.status === 401) {
        if (variant === "login")
            return notify("Invalid Credentials");
        notify("You may have been logged out");
        return false;
    }
    if (error.response.data.message !== "") {
        notify(error.response.data.message);
        return false;
    }
    if (error.response.statusText !== "") {
        notify(error.response.statusText);
        return false;
    }
}

const performCallback = (callback: Function, data: any) => {
    if (data !== undefined)
        return callback(data);
    callback();
};

class API {
    login = (data: any, callback: Function) => {
        axiosInstance.post('login', data).then(response => {
            return performCallback(callback, true)
        }).catch(error => {
            errorHelper(error, "login")
        })
    }
}

const instance = new API();
export default instance;