export const setLocalstorage=(loggedin)=>{
     localStorage.setItem("loggedin",JSON.stringify(loggedin))
}
export const getLocalstorage=()=>{
     return localStorage.getItem("loggedin")
}
