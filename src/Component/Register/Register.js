import React, { useRef } from 'react';
import googleLogo from '../../Picture/google-logo.png'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const formSubmit = (event) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Create Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>You have an account ?<a onClick={navigatLogin} href='/'>Login</a> </p>
            <br />
            <div style={{ cursor: 'pointer' }} className='flex d-flex border border-primary justify-content-center align-items-center '>
                <img style={{ width: '35px' }} src={googleLogo} alt="" />
                <small>login with google</small>
            </div>
        </div>
    );
};

export default Register;