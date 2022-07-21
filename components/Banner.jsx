import styles from "../styles/Banner.module.css"
import SearchIcon from '@mui/icons-material/Search';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__image}></div>
            <div className={styles.banner__search}>
                <span>find a recipe</span>
                <form className={styles.banner__searchForm}>
                    <input type="text" className={styles.banner__searchInput}/>
                    <SearchIcon fontSize="large" className={styles.banner__searchIcon}/>
                </form>
            </div>
        </div>
    );
}

export default Banner;