import Immutable from 'seamless-immutable';

const initialState = Immutable({
  error: '',
  loading: false,
  totalResults: 0,
  lastPage: 1,
  page: 1,
  pageSize: 5,
  articles: [],
  sources: [],

});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SOURCES_PENDING':
      return state.merge({ loading: true });
    case 'FETCH_SOURCES_REJECTED':
      return state.merge({ error: action.payload }, { deep: true });
    case 'FETCH_SOURCES_FULFILLED':
      return state.merge({ sources: action.payload.data.sources }, { deep: true });
    case 'FETCH_NEWS_PENDING':
      return state.merge({ loading: true });
    case 'FETCH_NEWS_REJECTED':
      return state.merge({ error: action.payload }, { deep: true });
    case 'FETCH_NEWS_FULFILLED':
      return state.merge({
        articles: state.articles.concat(action.payload.data.articles),
        totalResults: action.payload.data.totalResults,
      }, { deep: true });
    case 'FETCH_NEWS_RESET_FULFILLED':
      return state.merge({
        articles: action.payload.data.articles,
        totalResults: action.payload.data.totalResults,
      }, { deep: true });
    default:
      return state;
  }
};
