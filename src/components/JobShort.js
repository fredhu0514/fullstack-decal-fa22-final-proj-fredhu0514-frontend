import styles from './JobShort.module.css';
import { useNavigate } from 'react-router-dom';

const JobShort = (props) => {
    const navigate = useNavigate();

    function cardFunc() {
        navigate(`/job/${props.id}`);
    }

    return (
        <div className={styles.card} onClick={cardFunc}>
            <div>Company: { props.company }</div>
            <div>Post Date: { props.post_date }</div>
            <div>Refer Scope: <a href={ props.refer_scope_link } target="_blank">{ props.refer_scope_link }</a></div>
        </div>
    );
}

export default JobShort;