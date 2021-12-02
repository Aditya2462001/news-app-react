import React, { useEffect, useState } from 'react';
import {categories} from '../categories_data';
import News from './news';
import './category.css';


const Category = () => 
{
    const [categoriesData,setCategoriesData] = useState([]);
    const [inputData,setInputData] = useState('technology');


    const getInput = (input_data) =>
    {
        setInputData(input_data.category);
        getCategoryData();
    }

    useEffect(() =>
    {
        let url_for_category = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7c361038835041e2a81616fb35e029a9` ;
        const getCategoryData = async () =>
        {
            const fetch_data = await fetch(url_for_category);
            const data = await fetch_data.json();
            setCategoriesData(data.articles);
        }
            getCategoryData();
    
    },[]);

    const getCategoryData = async () =>
    {
            let url_for_category = `https://newsapi.org/v2/top-headlines?country=in&category=${inputData}&apiKey=7c361038835041e2a81616fb35e029a9` ;
            const fetch_data = await fetch(url_for_category);
            const data = await fetch_data.json();
            setCategoriesData(data.articles);
    }
   

    return (
        <div className="categories_section">
        <h1> News Categories</h1>
        <div className="categories_container">
        {categories.map((category) =>( <button key={category} onClick={() => getInput({category})}>{category}</button> ))}
        </div>
        <h2>Related Category News</h2>
            
        <News news={categoriesData} />

    </div>
    )
}

export default Category;
