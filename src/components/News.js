import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
  constructor(){
    super();
    this.state = {
      articles : [],
      page:1,
      loading : false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=apple&from=2023-09-24&to=2023-09-24&sortBy=popularity&apiKey=e92cb77835d74dadb13e5f51628f34c2&page=1&pageSize=15"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles : parsedData.articles , totalResults : parsedData.totalResults})
    }

  // function to handle previous
   handelPrevClick = async ()=>{
    let url = `https://newsapi.org/v2/everything?q=apple&from=2023-09-24&to=2023-09-24&sortBy=popularity&apiKey=e92cb77835d74dadb13e5f51628f34c2&page=${this.state.page - 1}&pageSize=15`
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page -1,
      article: parsedData.article
     })
  }
  
  // function to handle Next
  handelNextClick = async()=>{
      if (this.state.page +1 > Math.ceil(this.state.totalResults/15)){

      }
      let url = `https://newsapi.org/v2/everything?q=apple&from=2023-09-24&to=2023-09-24&sortBy=popularity&apiKey=e92cb77835d74dadb13e5f51628f34c2&page=${this.state.page + 1}&pageSize=15`
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page : this.state.page +1,
        article: parsedData.article
      })
             
  }

  render() {
    return (
      <div className="container my-3 ">
        <h1><strong>TaazaKhabar - TOP Headlines</strong></h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-4" key = {element.url}>
                      <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : "" } imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
          })}
        </div>
        <div className='d-flex justify-content-between' >
          <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPrevClick}>&larr;Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
