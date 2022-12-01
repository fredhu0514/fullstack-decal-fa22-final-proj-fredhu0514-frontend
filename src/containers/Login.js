import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <div className='container mt-5'>
            <h1>Log In</h1>
            <p>Log Into Your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group mb-2'>
                    <input 
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div> 
                <div className='form-group mb-2'>
                    <input 
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='8'
                        required
                    />
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Your password must be 8-20 characters long.
                    </small>
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <small className='mt-3'>
                <Link to='/signup'>Sign Up</Link> / <Link to='/reset-pw'>Reset Password</Link>
            </small>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);