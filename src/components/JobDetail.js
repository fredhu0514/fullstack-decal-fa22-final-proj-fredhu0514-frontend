import styles from './JobShort.module.css';

const JobDetail = (props) => {
    return (
        <div className={styles.card}>
            <div>Company: { props.company }</div>
            <div>Post Date: { props.post_date }</div>
            <div>Refer Provider: { props.recommender }</div>
            <div>Available Jobs:  <a href={ props.refer_scope_link } target="_blank">{ props.refer_scope_link }</a></div>
            <div>Refer Role Scope: { props.refer_scope_description }</div>
            <div>Requirements: { props.refer_requirement }</div>
        </div>
    );
}

export default JobDetail;