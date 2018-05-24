import axios from 'axios';
import { sources, news, API_KEY } from '../url';


export const fetchNews = (page, source = null) => {
  if (source) {
    return {
      type: 'FETCH_NEWS_RESET',
      payload: axios.get(`${news}?sources=${source}&pageSize=5&page=${page}&apiKey=${API_KEY}`),
    };
  }
  return {
    type: 'FETCH_NEWS',
    payload: axios.get(`${news}?country=us&pageSize=5&page=${page}&apiKey=${API_KEY}`),
  };
};

export const fetchSources = () => ({
  type: 'FETCH_SOURCES',
  payload: axios.get(sources),
});


export const filterBySource = source => fetchNews(1, source);

export const fetchMore = page => fetchNews(page + 1);
