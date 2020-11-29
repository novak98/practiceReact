import React, {useState, useEffect} from 'react';

const  FetchUsers = ({data}) => {
    
    


  
    return (
    <div>
        {data.map(({name,username,email,address:{street}}) => (
            <div key={name}>
                <div>{name}</div>
                <div>{username}</div>
                <div>{email}</div>
                <div>{street}</div>
            </div>
        ))}
    </div>

    );

}



    export default FetchUsers