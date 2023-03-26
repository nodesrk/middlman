export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Valid ContactUs
export const validContact = (msg) => {
    const { name,email,message } = msg
    const errors =[];
  
    if(!name){
      errors.push("Please enter your name.")
    } else if(name.length > 20){
      errors.push("Your name should not exceed 20 characters")
    }
  
    if(!email){
      errors.push("Please enter your email.")
    } else if(!validateEmail(email)){
      errors.push("Invalid email")
    }
  
    if(!message){
      errors.push("Please enter your message")
    } else if(message.length > 500){
      errors.push("Message should not exceed 500 characters")
    }
  
    return {
      errMsg: errors,
      errLength: errors.length
    }
}