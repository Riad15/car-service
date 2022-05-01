import React, { useRef } from 'react';
import googleLogo from '../../Picture/google-logo.png'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleSignIn from '../Login/GoogleSignIn/GoogleSignIn';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const ConfirmRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (loading) {
        return <p style={{ fontSize: '35px', color: 'blue', textAlign: 'center' }}>Loading...</p>;
    }
    if (user) {
        navigate('/home');
    }

    const formSubmit = (event) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = ConfirmRef.current.value;
        if (password.length > 5) {
            if (password === confirmPassword) {
                createUserWithEmailAndPassword(email, password);
                window.alert('succesfull your registration');
            } else {
                window.alert('incorrect your password')
            }
        } else {
            window.alert('password must be more then 6 digit')
        }

        event.preventDefault();
    }

    const navigatLogin = (event) => {
        navigate('/login')
        event.preventDefault();
    }
    return (
        <div className='w-50 mx-auto border border-2 rounded border-primary m-5 p-2'>
            <h1 className='text-primary text-center'>Register please...</h1>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Create Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={ConfirmRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary w-100 mx-auto d-block" type="submit">
                    register
                </Button>
            </Form>
            <p>You have an account ?<a onClick={navigatLogin} href='/'>Login</a> </p>
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

export default Register;