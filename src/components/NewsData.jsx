import React, { useEffect, useState } from 'react';
import NewsAllData from './NewsAllData';
import axios from 'axios';

const NewsData = () => {
    const [newsData, setNewsData] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('https://api-creator-server.vercel.app/news-data')
            .then(function (res) {
                setNewsData(res.data);
                // Initially, display the first 4 cards
                setVisibleCards(res.data.slice(0, 3));
            })
    }, []);

    // Function to rotate the cards every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % newsData.length;
            const nextVisibleCards = newsData.slice(nextIndex, nextIndex + 3);
            setCurrentIndex(nextIndex);
            setVisibleCards(nextVisibleCards);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, newsData]);

    return (
        <div className='news__data__main py-8 lg:py-20'>
            <h1 className='text-3xl lg:text-left text-center lg:text-5xl font-bold'>News</h1>

            <div className="news__all__data mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {visibleCards.map(data => <NewsAllData key={data._id} data={data} />)}
                </div>
            </div>
        </div>
    );
};

export default NewsData;
