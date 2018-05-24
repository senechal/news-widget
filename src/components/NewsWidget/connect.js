import { connect } from 'react-redux';
import NewsWidget from './NewsWidget';
import {
  fetchNews,
  fetchSources,
  fetchMore,
  filterBySource,
} from '../../actions/NewsWidgetActions';

const reducer = 'widget';

const mapStateToProps = state => ({ ...state[reducer] });
const mapDispatchToProps = {
  fetchNews,
  fetchSources,
  fetchMore,
  filterBySource,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsWidget);
