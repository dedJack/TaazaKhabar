import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
//  import PropTypes from 'prop-types';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e92cb77835d74dadb13e5f51628f34c2&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  // function to handle next
  handleNextClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e92cb77835d74dadb13e5f51628f34c2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({loading : false});
      console.log(parsedData);
      this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
  };

  // function to handle previous
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e92cb77835d74dadb13e5f51628f34c2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading : false});
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  render() {
    return (
      <div className="container my-3 ">
        <h1>
          <strong>TaazaKhabar - TOP Headlines</strong>
        </h1>
        {this.state.loading && <Spinner/>}
        <div className="row" >
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >&larr;Previous</button>
          <button
            disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >Next&rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
