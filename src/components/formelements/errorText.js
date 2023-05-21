import React from 'react';
const ErrorText = (props)=>{
    return(
        <p className='text-cMain ml-[10px] text-xl' >{props.error}</p>
    )
}

export default ErrorText;