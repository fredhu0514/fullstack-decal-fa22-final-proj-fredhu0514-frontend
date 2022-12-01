import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;
    const { uid, token } = useParams(); 

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
 
        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/' />
    }

    return (
        <div className='container mt-5'>
            <h1>Reset password below:</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group mt-3 mb-2'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='New Password'
                        name='new_password'
                        value={new_password}
                        onChange={e => onChange(e)}
                        minLength='8'
                        required
                    />
                </div>
                <div className='form-group mb-3'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Re-enter New Password'
                        name='re_new_password'
                        value={re_new_password}
                        onChange={e => onChange(e)}
                        minLength='8'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Confirm</button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);