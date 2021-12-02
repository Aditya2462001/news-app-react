import React, { useEffect, useState } from 'react';
import News from './news';
import './topHeadline.css';

const TopHeadline = () => {
    const [topHeadLines, setTopHeadLines] = useState([]);

    useEffect(() => {

        const getTopheadlines = async () => 
        {
            const fetch_data = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=7c361038835041e2a81616fb35e029a9');
            const data = await fetch_data.json();

            setTopHeadLines(data.articles);
        }
        getTopheadlines();
    }, []);


    return (
        <div className="topHeadline__section">
            <h2>Top Headlines</h2>
            <News news={topHeadLines} />
        </div>
    )
}

export default TopHeadline;
