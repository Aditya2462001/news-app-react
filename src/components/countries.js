import React, { useEffect, useState } from 'react';
import News from './news';
import './countries.css';

const countries = [{'country':'india','country_code': 'in'},{'country':'USA','country_code': 'us'},
{'country':'China','country_code': 'cn'},
{'country':'Japan','country_code': 'jp'},
]

const Countries = () =>
{
    const [countryData,setCountryData] = useState([]);
    const [data,setData] = useState('');

    const getInput = (code) =>
    {
        setData(code.country_code);
        GetFetchData();
        
    }

    useEffect(() =>
    {
        let url_for_country = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7c361038835041e2a81616fb35e029a9` ;
        const GetFetchData = async () =>
        {
            const fetch_data = await fetch(url_for_country);
            const coun_data = await fetch_data.json();
            setCountryData(coun_data.articles);

        }
        GetFetchData();
        
    },[]);

        const GetFetchData = async () =>
        {
            let url_for_country = `https://newsapi.org/v2/top-headlines?country=${data}&apiKey=7c361038835041e2a81616fb35e029a9` ;
            const fetch_data = await fetch(url_for_country);
            const coun_data = await fetch_data.json();
            setCountryData(coun_data.articles);

        }  
        
    return(
        <div className="countries_section">
            <h1>Countries Data</h1>
            <div className="countries_container">
            {countries.map(({country,country_code}) =>( <button key={country_code} onClick={() => getInput({country_code})}>{country}</button> ))}
            </div>
            <h2>Related Category News</h2>
            
        <News news={countryData} key="1233322"/>
        </div>
    )
}

export default Countries;