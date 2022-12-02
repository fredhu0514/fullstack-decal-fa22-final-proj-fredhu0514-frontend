import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className='container'>
        <div class='jumbotron mt-5'>
            <h1 class='display-4'>Welcome to Refer Finder!</h1>
            <p class='lead'>Refer Finder aims to provide a reliable and convenient platform for both job seekers to find referrals that aid in their career and referral providers to find competent candidates for the position. Refer Finder allows referral providers to post jobs they are referring, while candidates can choose the job they are interested in and get in touch swiftly with the list of postings. To help referrers find the right candidate quickly, each user will set up their own profile that showcases their ability and career preferences.</p>
            <p class='lead'>At the current moment, after getting an MVP finished we will market it within UC Berkeley. In the future, we plan on extending it to other campuses, creating a large, valuable network of career opportunities that dig out the real talent within the student groups.</p>
            <hr class='my-4' />
            <p>Click the Log In button</p>
            <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
        </div>
    </div>
);

export default Home;