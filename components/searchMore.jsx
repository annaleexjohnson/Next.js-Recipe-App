import styles from '../styles/SearchMore.module.scss'
import { MagnifyingGlass } from "phosphor-react";

const SearchMore = () => {
    return (
        <div className={styles.searchMore}>
            <div className={styles.searchMore__container}>
                <h1>Nothing to your liking?</h1>
                <span className={styles.searchMore__title}>Search Recipes</span>

                <form className={styles.searchMore__form}>
                    <input type="text" placeholder="Search for a recipe"className={styles.searchMore__input}/>
                    <button>
                        <MagnifyingGlass size={24} weight="bold" color="#fff"/>
                    </button>
                </form>
            </div>
        </div>
        
    );
}

export default SearchMore;