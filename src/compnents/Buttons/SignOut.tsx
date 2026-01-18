'use client'
import { signOut } from 'next-auth/react';


const SignOut = () => {


  const handleSignOut = async () => {
    await signOut();

  };

  return (
    <button className="font-bold" onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;