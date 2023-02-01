import React, {useEffect, useState} from 'react';
import BrowseCard from './browseCard';
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide'
import styles from '../styles/BrowseRecipes.module.scss'
import '@splidejs/splide/dist/css/splide.min.css';
import Link from 'next/link'

const BrowseRecipes = (props) => {

    const [browse, setBrowse] = useState([]);
    const [search, setSearch] = useState('chicken');
    const API_KEY = "0958b502053840f5a385dcd8c80e9034";
    const RECIPE_ROUTE = "/recipePages/[recipeId]"

    useEffect(() => {
        getRecipes();
    }, []);
    

    const getRecipes = async () => {
        const check = localStorage.getItem('browse');

        //if theres already something in local storage, it won't re-fetch        
        if(check){
            setBrowse(JSON.parse(check))
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12`);
            const data = await api.json();
            
            //saves data.recipes as a string to local storage. the key would be 'browse'
            localStorage.setItem('browse', JSON.stringify(data.recipes));
            setBrowse(data.recipes); 
        }
    }
    
    return (
        <div className={styles.browseRecipes} id="browse-recipes"> 
            <div className={styles.browseRecipes__title}>
                <hr></hr>
                <h1>Browse</h1>
                <hr></hr>
            </div>
            <div className={styles.browseRecipes__wrapper}>
                <Splide hasTrack={false} options={{
                    perPage: 4, 
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '3rem',
                    width: '100%',
                    height: '20rem'
                }}>
                    <SplideTrack>
                        {browse.map((recipe)=>{
                            return (
                                <SplideSlide key={recipe.id}>
                                   <Link href={{
                                    pathname: `/recipePages/${recipe.id}`,
                                    query: recipe.id
                                   }}>
                                        <a>
                                            <BrowseCard title={recipe.title} image={recipe.image}/>
                                        </a>
                                    </Link>
                                </SplideSlide>
                            )
                        })} 
                    </SplideTrack>

                </Splide>
            </div>
            
        </div>
    );
}


export default BrowseRecipes;