import React, {useEffect, useState} from 'react';

const RecipeList = () => {
    const APP_ID = "1e20abd0";
    const APP_KEY = "ff361c5a6b4dd2c9c029163f37050540"

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const search= "chicken"

    const fetchRecipes = 
    useEffect(()=>{
        setLoading(true);
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(response => response.json())
        .then(data => {
            setRecipes(data);
            console.log(data);
        })
        .catch(()=>{
            setError(true)
        })
        .finally(()=>{
            setLoading(false);
        });
    }, [])

    if(!loading && !error){
        console.log(recipes, 'ho');
    }

    return (
        <div>

        </div>
    );
}


export default RecipeList;