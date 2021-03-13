import './NewsRelease.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Layout, Menu, Spin } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

/**
 * News Interface
 */
interface INews {
  id: number;
  title: string;
  body: string;
}

const NewsRelease = () => {
  const defaultPosts: INews[] = [];
  const [news, setNews]: [INews[], (news: INews[]) => void] = React.useState(
    defaultPosts
  );
  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );

  /**
   * Get news from the API
   */
  const getNews = () => {
    axios
      .get<INews[]>('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setNews(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? 'Resource not found'
            : 'An unexpected error has occurred';
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return <Spin />;
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="news">
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="news-release-div">
          <h1>News Release</h1>
          {news.map((post) => (
            <li key={post.id}>
              <h3>
                <DoubleRightOutlined /> {post.title}
              </h3>
              <p>{post.body}</p>
            </li>
          ))}
        </div>
        {error && <p className="error">{error}</p>}
      </Content>
    </Layout>
  );
};

export default NewsRelease;
