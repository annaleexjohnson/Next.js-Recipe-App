import styles from '../styles/SearchMore.module.scss'

const SearchMore = () => {
    return (
        <div className={styles.searchMore}>
            <h1>Nothing to your liking?</h1>
            <button className={styles.searchMore__btn}>Search Recipes</button>
        </div>
    );
}

export default SearchMore;