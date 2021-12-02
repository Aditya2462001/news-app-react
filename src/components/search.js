import React, { useState } from 'react';
import News from './news';
import './search.css';
import search_icon from '../img/search_2.svg';

const Search = () => {
    const [searchData, setSearchData] = useState([]);
    const [input, setInput] = useState('');

    const getDate = async () => 
    {
        let url = `https://newsapi.org/v2/everything?q=${input}&sortBy=popularity&apiKey=7c361038835041e2a81616fb35e029a9`;
        const fetch_data = await fetch(url);
        const json_data = await fetch_data.json();
        setSearchData(json_data.articles);
    }
    
    const SubmitEvent = (e) => {
        e.preventDefault();
        getDate();

    };

    return (
        <div className="search__container">
            <h2>Search News</h2>
            <form onSubmit={SubmitEvent}>
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Search Here" />
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
            <div className="searchResult__container">
                <h2>All Search Result</h2>
                {searchData.length === 0 ? ( <div className="not_at_search">
                      <h1>Not At Search</h1>
                      <img src={search_icon} alt="" />
                 </div>)
                 :<News news={searchData} /> }
            </div>
        </div>
    )
}

export default Search;
