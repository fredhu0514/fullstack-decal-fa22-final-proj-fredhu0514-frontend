import styles from './JobShortGuest.module.css';
import { useNavigate } from 'react-router-dom';

const JobShortGuest = (props) => {
    const navigate = useNavigate();

    function cardFunc() {
        navigate('/login');
    }

    return (
        <div className={styles.card} onClick={cardFunc}>
            <div>Company: { props.company }</div>
            <div>Post Date: { props.post_date }</div>
            <div>Refer Scope: <a href={ props.refer_scope_link } target="_blank">{ props.refer_scope_link }</a></div>
            <div>Refer Provider Email: <span className={styles.unlock}>Login & Unlock.</span></div>
            <div>Refer Description: <span className={styles.unlock}>Login & Unlock.</span></div>
            <div>Role Requirements: <span className={styles.unlock}>Login & Unlock.</span></div>
        </div>
    );
}

export default JobShortGuest;