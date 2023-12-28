import React, {useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) =>{

  const [articles , setArticles] = useState([])
  const [page , setPage] = useState(1)
  const [loading , setLoading] = useState(true)
  const [totalResults , setTotalresults] = useState(0)

  //function to updateNews news.
  const updateNews = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;    
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalresults(parsedData.totalResults);
    setLoading(false);
  }

  useEffect(() => {
    // eslint-disable-next-line
    updateNews();
  } , []);

  const fetchMoreData = async () => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalresults(parsedData.totalResults)
    setLoading(false)
  }

    return (
      <>
        <h1 className="text-center">
          <strong /*styles={{display:"block", margin:"0px 50px"}}*/>TaazaKhabar - TOP Headlines</strong>
        </h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row" >
            {articles && articles.length > 0 && articles.map((element, index) => {
              return (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem
                  title={element.title || 'Title Not Available'}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  publishedAt={element.publishedAt}
                  source={element.source?.name || 'Source Not Available'}
                  newsUrl={element.url}
                  />
                </div>
              );
            })}
                  
            </div>
          </div>

        </InfiniteScroll>

      </>
    );
  }

News.defaultProps = {
  pageSize: "6",
  country: "in",
  category: "general"
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}
export default News;