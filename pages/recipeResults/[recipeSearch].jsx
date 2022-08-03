import {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/RecipeResults.module.scss'
import Header from '../../components/header'
import Link from 'next/link'

const RecipeResults = () => {
    const router = useRouter();
    const searchedRecipes = router.query.recipeSearch;
    const [recipes, setRecipes] = useState([])

    const API_KEY = "0958b502053840f5a385dcd8c80e9034";


    useEffect(()=>{
        if (!searchedRecipes) {
            return
          }
        const recipeSearch = async () => {      
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${searchedRecipes}&number=15`);
            const data = await api.json();
            setRecipes(data.results);
        }

        recipeSearch(); 
    }, [searchedRecipes])

    console.log(recipes)
    return (
        <>
        <Header />
        <div className={styles.recipeResults}>
            <p>{`Showing results for: "${searchedRecipes}"`}</p>

            <div className={styles.recipeResults__container}>
                {
                    recipes.map((item, index)=>{
                        return(
                            <Link key={index} href={{
                                pathname: `/recipePages/${item.id}`,
                                query: item.id
                            }}>
                                <div  className={styles.recipeResults__item}>
                                    <div className={styles.recipeResults__image} style={{backgroundImage: `url(${item.image})`}} ></div>
                                    <div className={styles.recipeResults__title}><h1>{item.title}</h1></div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        </>
    );
}

export default RecipeResults;