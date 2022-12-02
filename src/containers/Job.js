import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import JobDetail from '../components/JobDetail';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';


const Job = ({ isAuthenticated }) => {
    const [job, setJob] = useState();

    const { jid } = useParams();
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    useEffect(
        () => {getJob(jid)}, []
    );

    const getJob = (id) => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/job/detail/${id}/`, config)
        .then((response) => {
            setJob(response.data);
        })
        .catch((err) => {
            console.log(err);
            alert(err);
        });
    }

    if (!isAuthenticated) {
        return <Navigate to='/' />
    }

    return (
        <div>
            {
                job ? 
                    <JobDetail 
                        recommender={job.recommender} 
                        company={job.company} 
                        post_date={job.post_date} 
                        refer_scope_link={job.refer_scope_link} 
                        refer_scope_description={job.refer_scope_description}
                        refer_requirement={job.refer_requirement}
                    />
                : <div>Loading...</div>
            }
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(Job);