import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleLogo from '../../../Picture/google-logo.png'

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let handleError;

    if (error) {
        handleError = <div> <p style={{ color: 'red' }}>Error: {error.message}</p></div>


    }

    if (loading) {
        return <p style={{ fontSize: '35px', color: 'blue', textAlign: 'center' }}>Loading...</p>;
    }
    if (user) {
        navigate('/');
    }
    return (
        <div>
            {handleError}
            <div onClick={() => signInWithGoogle()} style={{ cursor: 'pointer' }} className='flex d-flex border border-primary justify-content-center align-items-center bg-primary '>
                <img style={{ width: '35px' }} src={googleLogo} alt="" />
                <small style={{ fontSize: '18px', fontWidth: '400', color: 'white' }}>login with google</small>
            </div>

        </div>
    );

};

export default GoogleSignIn;