import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const {signInUser, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    
    const from = location.state?.from?.pathname || "/"

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error.message)
        })
        form.reset();
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className='w-50 mx-auto mt-5 border p-4'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>

                <div className='text-center'>
                    <Button className='w-100 mb-3' variant="primary" type="submit">
                        Login
                    </Button>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline-primary w-100 mb-3'><FaGoogle /> Login with goggle </button>
                </div>
                <p className='mt-3 text-center'>Don't have an account <Link to="/register">Please Register</Link></p>
            </Form>

        </div>
    );
};

export default Login;