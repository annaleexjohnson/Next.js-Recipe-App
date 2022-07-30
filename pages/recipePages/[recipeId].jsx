import { LibraryAddCheckRounded } from '@mui/icons-material';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import styles from '../../styles/RecipePage.module.scss'

const RecipePage = (props) => {
    
    const router = useRouter();
    const recipeId = router.query.recipeId;
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([])
    const [instructions, setInstructions] = useState([]);

    const API_KEY = "0958b502053840f5a385dcd8c80e9034";

    useEffect(()=>{
        if (!recipeId) {
            return
          }
        const getRecipe = async () => {
            const check = localStorage.getItem(`Recipe #${recipeId}`);
            //if theres already something in local storage, it won't re-fetch        
            if(check){
                setRecipe(JSON.parse(check));
                setInstructions(JSON.parse(check).analyzedInstructions[0].steps);
                setIngredients(JSON.parse(check).extendedIngredients);
            }else{
                const api = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`);
                const data = await api.json();
                localStorage.setItem(`Recipe #${recipeId}`, JSON.stringify(data));
                console.log(data);

                setRecipe(data);
                setInstructions(data.analyzedInstructions[0].steps);
                setIngredients(data.extendedIngredients);
            }

        }

        getRecipe(); 
    }, [recipeId])

    console.log(recipe, instructions, ingredients)

    return (
        <>
            <Header />
            <div className={styles.recipeContainer}>
                <div className={styles.recipe__header}>
                    <h1>{recipe.title}</h1>
                    <p><b>Recipe from {recipe.creditsText}</b></p>
                    <a href={recipe.sourceUrl}>{`${recipe.sourceUrl}`}</a>

                </div>

                {/* "https://www.foodista.com/recipe/QKLVNNXS/crab-artichoke-dip-hot" */}

                <div className={styles.recipe__block1}>
                    <div className={styles.recipe__image} style={{backgroundImage: `url(${recipe.image})`}}></div>
                    <div className={styles.recipe__ingredients}>
                        <h1>Ingredients</h1>
                        <ul>
                            {
                                ingredients.map((item, index)=>{
                                    return (<li key={index}>{item.original}</li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.recipe__instructions}>
                    <h1>Instructions</h1>
                    <ol>
                        {
                            instructions.map((step, index)=>{
                                return (<li key={index}>{step.step}</li>)
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
        
    );
}

export default RecipePage;