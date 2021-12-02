import React from 'react';
import './news.css';
import {Link} from 'react-router-dom';


const News = ({news}) => 
{
    return (
        <div className="News__seaction">
            {news.map((each) => {
                return (
                    <div className="news_block" key={each.title}>
                        <div className="news_img">
                            <img src={each.urlToImage} alt="" />
                        </div>
                        <div className="news_content">
                            <h3>{each.title}</h3>
                            <div className="content_author_date">
                                <p><strong>Source : </strong>{each.author} </p>
                                <span> <strong>Date :</strong> {each.publishedAt}</span>
                            </div>
                            <p className="news_desc">{each.description}........</p>
                            <Link to={each.url}>Read More</Link>
                        </div>
                    </div>

                );
            })}
        </div>
    )
}

export default News;
