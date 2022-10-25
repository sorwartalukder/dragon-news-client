import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, verifyEamil } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const [accepted, setAccepted] = useState(false)

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        setError(null)
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const profile = { displayName: name, photoURL: photoURL }
        console.log(name, password, photoURL, email)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserProfile(profile)
                    .then(() => { })
                    .catch(e => console.error(e))
                verifyEamil()
                    .then(() => { })
                    .catch(e => console.error(e))
                console.log(user)
                toast.success('Please verify your email address.')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)

            })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>Terms and conditions</Link></>} />
            </Form.Group>

            <Form.Text className="text-danger">
                {
                    error
                }
            </Form.Text>
            <br />
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
        </Form>
    );
};

export default Register;