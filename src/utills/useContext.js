 import { createContext } from "react";

 const UserContext = createContext({
    user:{
        name:'Dummy name',
        email:'dummyemail@gmail.com'
    }
 })
 UserContext.displayName='UContact'
 export default UserContext;