'use client'
import { signOut } from 'next-auth/react';
import React from 'react';

const SignOut = () => {
    return (
        <div>
            <button className='font-bold'  onClick={()=>signOut()}>Sign Out</button>
        </div>
    );
};

export default SignOut;