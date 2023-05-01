import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [accepted, setAccepted] = useState(false)

    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error.message)
            })
        form.reset()
    };

    const handleAccepted = (e) => {
        setAccepted(e.target.checked)
    }


    return (
        <div className='w-50 mx-auto mt-5 border p-4'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo Url" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to="/terms">Terms And Conditions</Link></>} />
                </Form.Group>

                <div className='text-center'>
                    <Button disabled={!accepted} variant="primary" type="submit">
                        Register
                    </Button>
                </div>
                <p className='mt-3 text-center'>Already have an account? <Link to="/login">Please Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;