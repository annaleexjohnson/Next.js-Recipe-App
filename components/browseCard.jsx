import styles from '../styles/BrowseCard.module.scss'

const BrowseCard = ({title, image}) => {
    return (
        <div className={styles.browseCard}>  
            <div className={styles.browseCard__img} style={{backgroundImage: `url("${image}")`}}></div>
            <div className={styles.titleOverlay}>
                <h1>{title}</h1>
            </div>
        </div>
      
    );
}

export default BrowseCard;