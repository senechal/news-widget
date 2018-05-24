import React from 'react';
import './newsItemStyles.css';

const NewsItem = () => (
  <div className="news-item">
    <a className="news-item-title" href="#">
      The Trump Russia investigation is closing in
    </a>
    <div className="news-item-date">28/09/2017</div>
    <div className="news-item-source">Independent</div>
  </div>
);

export default NewsItem;
