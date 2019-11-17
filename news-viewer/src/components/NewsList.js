import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({category}) => {
    console.log("### NewsList =>"+category);
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("### useEffect()");
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                console.log("### query => "+query);
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=66a50d56ff854b35a789ddcaf933be58`
                    ,
                );

                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }

            setLoading(false);
        };
        fetchData();
    }, [category]);

    // 대기 중일 때
    if (loading) {
        console.log("### loding");
        return <NewsListBlock>대기 중...</NewsListBlock>;
    }

    // 아직 아직 articles 값이 설정되지 않았을 때
    if (!articles) {
        return null;
    }
    

    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};



export default NewsList;