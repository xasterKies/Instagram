import React from 'react'
import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'

function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    return (
        <div>
            <p>I am the Login</p>
        </div>
    )
}

export default Login
