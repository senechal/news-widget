import React from 'react';
import './newsWidgetStyles.css';
import NewsItem from '../NewsItem';


const NewsWidget = () =>
  (
    <div className="news-widget-list">
      <div className="news-header">
        <h3 className="news-title">News</h3>
        <select className="source-selector">
          <option>Filter By Source</option>
          <option>mock</option>
          <option>mock</option>
          <option>mock</option>
        </select>
      </div>
      <div className="news-list">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
      <div>
        <button className="show-more-button">Show More</button>
      </div>
    </div>
  );


export default NewsWidget;
