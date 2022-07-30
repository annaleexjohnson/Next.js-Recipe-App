import StarIcon from '@mui/icons-material/Star';
import styles from '../styles/Review.module.scss'

const Review = () => {
    return (
        <div className={styles.review__container}>
            <div className={styles.review__text}>
                <h1 className={styles.review__textTitle}>What the internet has to say about us</h1>
                <span className={styles.review__rating}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </span>
                <p className={styles.review__textQuote}>“A totally real review that a person wrote with enthusiasm!”</p>
            </div>
            <div className={styles.review__image}></div>
        </div>
    );
}

export default Review;