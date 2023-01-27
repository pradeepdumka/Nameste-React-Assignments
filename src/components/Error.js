import {useRouteError} from 'react-router-dom';

const Error=()=>{
   const {status ,statusText} = useRouteError();
    
    return(
        <>
         <h1>Oops!!</h1>
        <h3>Something went wrong!</h3>
        <h2>Error {status} !{statusText} </h2>
        </>
       
    )
}
export default Error;