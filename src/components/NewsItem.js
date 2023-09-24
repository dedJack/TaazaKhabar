 import React, { Component } from 'react'
//  import PropTypes from 'prop-types'
 
 export class NewsItem extends Component {
   static propTypes = {
 
   }
 
   render() {
     let {title , description , imageUrl } = this.props;
     return (
      <div>
         <div className="card " style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><b>{title}</b></h5>
              <p className="card-text">{description}</p>
              <a href="/NewsItem" className="btn btn-sm btn-primary">Read</a>
            </div>
        </div>
      </div>
     )
   }
 }
 
 export default NewsItem
 