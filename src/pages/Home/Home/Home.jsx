import React from 'react';
import { FaBookmark, FaShare } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            {
                news &&
                news.map(singleNews => {
                    const { _id, title, author, image_url, details } = singleNews;
                    return (
                        <div key={_id} className='col-lg-12 mb-4'>
                            <div className="card">
                                <div className="card-header news-header d-flex align-items-center">
                                    <img src={author.img} alt="" />
                                    <div className='flex-grow-1 ms-3 mt-2'>
                                        <h5>{author.name}</h5>
                                        <p>{author.published_date}</p>
                                    </div>
                                    <div>
                                        <i><FaBookmark /></i>
                                        <i className='ms-3'><FaShare /></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <img className='img-fluid' src={image_url} alt="" />
                                    {details.length > 250 ? <>{details.slice(0, 250)}..... <Link to={`/news/${_id}`}>Read More</Link></> : <>{details}</>}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Home;