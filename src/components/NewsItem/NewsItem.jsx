import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './newsItemStyles.css';

const NewsItem = ({
  title, url, date, source,
}) => (
  <div className="news-item">
    <a className="news-item-title" href={url}>
      {title}
    </a>
    <div className="news-item-date">{moment(date).format('DD/MM/YYYY')}</div>
    <div className="news-item-source">{source.name}</div>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  source: PropTypes.objectOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
};

export default NewsItem;
