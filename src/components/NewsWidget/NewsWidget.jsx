import React from 'react';
import './newsWidgetStyles.css';
import NewsItem from '../NewsItem';

const articles = [
  {
    source: {
      id: 'fortune',
      name: 'Fortune',
    },
    author: 'Sarah Gray',
    title: 'Critics Ask Amazon to Stop Selling Facial Recognition Technology to Police',
    description: '',
    url: 'http://fortune.com/2018/05/23/critics-ask-amazon-to-stop-selling-facial-recognition-technology-to-police/',
    urlToImage: 'https://fortunedotcom.files.wordpress.com/2018/05/amazon_thumb.jpg',
    publishedAt: '2018-05-23T22:29:51Z',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: 'Aishwarya Venugopal',
    title: "Ackman makes roughly $1 billion bet on Lowe's",
    description: "Billionaire investor William Ackman said on Wednesday that his hedge fund had taken a roughly $1 billion stake in Lowe's (LOW.N), revealing his third large investment this year.",
    url: 'https://www.reuters.com/article/us-lowes-results/ackman-makes-roughly-1-billion-bet-on-lowes-idUSKCN1IO1BB',
    urlToImage: 'https://s2.reutersmedia.net/resources/r/?m=02&d=20180523&t=2&i=1265260582&w=1200&r=LYNXNPEE4M0QI',
    publishedAt: '2018-05-23T22:23:25Z',
  },
  {
    source: {
      id: 'the-wall-street-journal',
      name: 'The Wall Street Journal',
    },
    author: 'The Editorial Board',
    title: 'The Art of a Banking Deal',
    description: 'Congress eases the Dodd-Frank pain on non-giant banks.',
    url: 'https://www.wsj.com/articles/the-art-of-a-banking-deal-1527114002',
    urlToImage: 'https://images.wsj.net/im-11728/social',
    publishedAt: '2018-05-23T22:20:00Z',
  },
  {
    source: {
      id: 'cnn',
      name: 'CNN',
    },
    author: 'Seth Fiegerman',
    title: "Elon Musk wants to rate journalists. He'd call his site 'Pravda'",
    description: 'Elon Musk accused the media of being dishonest and floated the possibility of building a service to rate the credibility of specific journalists and news outlets.',
    url: 'http://money.cnn.com/2018/05/23/technology/elon-musk-media/index.html',
    urlToImage: 'https://i2.cdn.turner.com/money/dam/assets/180111201327-elon-musk-780x439.jpg',
    publishedAt: '2018-05-23T22:10:04Z',
  },
];

class NewsWidget extends React.Component {
  componentDidMount() {
    this.props.fetchSources();
    this.props.fetchNews(this.props.page);
  }
  render() {
    const mappedArticles = this.props.articles.map(article => (
      <NewsItem
        key={article.title}
        title={article.title}
        url={article.url}
        date={article.publishedAt}
        source={article.source}
      />
    ));
    const mappedSources = this.props.sources.map(source => (
      <option key={source.id} value={source.id}>{source.name}</option>
    ));
    return (
      <div className="news-widget-list">
        <div className="news-header">
          <h3 className="news-title">News</h3>
          <select onChange={(event) => { this.props.filterBySource(event.target.value); }} className="source-selector">
            <option value={null}>Filter By Source</option>
            {mappedSources}
          </select>
        </div>
        <div className="news-list">
          {mappedArticles}
        </div>
        <div>
          <button className="show-more-button" onClick={() => this.props.fetchMore(this.props.page)}>Show More</button>
        </div>
      </div>
    );
  }
}

export default NewsWidget;
