import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSignIn from './GoogleSignIn/GoogleSignIn';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (loading) {
        return <p style={{ fontSize: '35px', color: 'blue', textAlign: 'center' }}>Loading...</p>;
    }
    const formSubmit = (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (user) {
            window.alert('your email or password is incorrect')
        } else {
            signInWithEmailAndPassword(email, password);
        }

        event.preventDefault();
    }
    if (user) {
        navigate('/home')
    }
    const navigatRegister = (event) => {
        navigate('/register')
        event.preventDefault();
    }
    const handelResetPassWord = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
        window.alert('send email');

    }

    return (
        <div className='w-50 mx-auto border border-2 rounded border-primary m-5 p-2'>
            <h1 className='text-primary text-center'>Please Login...</h1>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary w-100 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            <p>forget Password ?<a onClick={handelResetPassWord} href=''>Reset passWord</a> </p>
            <br />
            <p>New Member ?<a onClick={navigatRegister} href='/'>register</a> </p>
            <br />
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
                <p className='mt-3 p-2'>or</p>
                <div style={{ height: '1px' }} className="bg-primary w-50"></div>
            </div>
            <GoogleSignIn></GoogleSignIn>
        </div>
    );
};

export default Login;