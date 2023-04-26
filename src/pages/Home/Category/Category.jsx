import React, { useEffect, useState } from 'react';
import "./Category.css"
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const news = useLoaderData();
    const {id} = useParams();

    const catagories = news.filter((ct)=> {
        if(id == 0){
            return news;
        }
        else{
            return ct.category_id == id;
        }
    });

     
    return (
        <div>
            {
                catagories.map((singleNews)=> <NewsCard key={singleNews._id} singleNews={singleNews} />)
            }
        </div>
    );
};

export default Category;