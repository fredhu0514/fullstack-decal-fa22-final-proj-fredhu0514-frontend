import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


const JobCreate = ({ isAuthenticated }) => {
    const navigate = useNavigate();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    function func(formData) {
        const { company, refer_scope_link, refer_scope_description, refer_requirement } = formData;
        const body = JSON.stringify({ company, refer_scope_link, refer_scope_description, refer_requirement });
        // axios.defaults.xsrfCookieName = 'csrftoken';
        // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.post(`${process.env.REACT_APP_API_URL}/api/job/post/`, body, config)
        .then((res) => {
            console.log(res)
            navigate('/job-board');
        })
        .catch((err) => {
            console.log(err)
        });
    }

    const [formData, setFormData] = useState({
        company: '',
        refer_scope_link: '',
        refer_scope_description: '',
        refer_requirement: '',
    });

    const { company, refer_scope_link, refer_scope_description, refer_requirement } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        func(formData);
    };

    if (!isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <div className='container mt-5'>
            <h1>Post a Refer</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group mb-2'>
                    <input 
                        className='form-control'
                        type='company'
                        placeholder='Company'
                        name='company'
                        value={company}
                        onChange={e => onChange(e)}
                        maxLength='127'
                        required
                    />
                </div> 
                <div className='form-group mb-2'>
                    <input 
                        className='form-control'
                        type='refer_scope_link'
                        placeholder='Refer Link / Scope Link'
                        name='refer_scope_link'
                        value={refer_scope_link}
                        onChange={e => onChange(e)}
                        maxLength='1023'
                        required
                    />
                </div> 
                <div className='form-group mb-2'>
                    <input 
                        className='form-control'
                        type='refer_scope_description'
                        placeholder='Scope Description'
                        name='refer_scope_description'
                        value={refer_scope_description}
                        onChange={e => onChange(e)}
                        maxLength='255'
                        required
                    />
                </div> 
                <div className='form-group mb-2'>
                    <input 
                        className='form-control'
                        type='refer_requirement'
                        placeholder='Refer Requirements'
                        name='refer_requirement'
                        value={refer_requirement}
                        onChange={e => onChange(e)}
                        maxLength='255'
                        required
                    />
                </div> 
                <button className='btn btn-primary' type='submit'>Create</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(JobCreate);