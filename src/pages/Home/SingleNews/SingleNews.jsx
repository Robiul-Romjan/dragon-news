import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const SingleNews = () => {
    const allNews = useLoaderData();
    const {id} = useParams();

     const newsDetail = allNews.find((news)=>news._id == id);

    return (
        <div>
            
            <img className='w-100' src={newsDetail.image_url} alt="" />
            <h2>{newsDetail.title}</h2>
            <p>{newsDetail.details}</p>
            <Link to={`/category/${newsDetail.category_id}`} className='btn btn-danger'><FaArrowLeft /> All news in this category</Link>
        </div>
    );
};

export default SingleNews;