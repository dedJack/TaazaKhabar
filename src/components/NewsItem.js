 import React, { Component } from 'react'
//  import PropTypes from 'prop-types'
 
 export class NewsItem extends Component {
   static propTypes = {
 
   }
 
   render() {
     let {title , description , imageUrl , newsUrl} = this.props;
     return (
      <div>
        <div>
          <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: "18rem"}}>
              <img src={imageUrl} className="card-img-top" alt="Img not available"/>
              <div className="card-body">
                <h5 className="card-title"><b>{title}</b></h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
              </div>
          </div>
        </div>
        
     </div>
     )
   }
 }
 
 export default NewsItem
 