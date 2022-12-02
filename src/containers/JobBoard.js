import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobShort from '../components/JobShort';
import JobShortGuest from '../components/JobShortGuest';
import { connect } from 'react-redux';

import styles from './JobBoard.module.css';


const JobBoard = ({ isAuthenticated }) => {
    const [jobs, setJobs] = useState();

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    useEffect(
        () => {getList()}, []
    );

    const getList = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/job/view/`, config)
        .then((response) => {
            setJobs(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    if (!isAuthenticated) {
        return (
            <div>
                {
                    jobs ? jobs.map(d =>
                        <JobShortGuest refer_scope_link={d.refer_scope_link} company={d.company} post_date={d.post_date} />
                    ) : <div>Loading...</div>
                }
                <div className={styles.footer}>
                    <p>Support Email: fredhu0514@berkeley.edu</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            {
                jobs ? jobs.map(d =>
                    <JobShort refer_scope_link={d.refer_scope_link} company={d.company} post_date={d.post_date} id={d.id} />
                ) : <div>Loading...</div>
            }
            <div className={styles.footer}>
                <p>Support Email: fredhu0514@berkeley.edu</p>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {})(JobBoard);