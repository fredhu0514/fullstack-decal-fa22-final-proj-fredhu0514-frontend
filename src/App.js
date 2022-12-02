import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';

import JobBoard from './containers/JobBoard';
import JobCreate from './containers/JobCreate';
import Job from './containers/Job';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<Signup />} />
                        <Route exact path='/activate/:uid/:token' element={<Activate />} />
                        <Route exact path='/reset-pw' element={<ResetPassword />} />
                        <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
                        <Route exact path='/job-board' element={<JobBoard />} />
                        <Route exact path='/job-post' element={<JobCreate />} />
                        <Route exact path='/job/:jid' element={<Job />} />
                    </Routes>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;