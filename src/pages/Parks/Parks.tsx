import './Parks.css';
import React, { useState } from 'react';
import { IRootReducerState } from '../../store/IRootReducerState';
import { getParks } from '../../store/Parks/parkServices';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Layout, Menu, Switch } from 'antd';
import ParkList from '../../components/ParkList/ParkList';

const { Header, Content } = Layout;

/**
 * Parks Page
 * @constructor
 */
const Parks = () => {
  const dispatch = useDispatch();

  const parks = useSelector((state: IRootReducerState) => state?.parks);

  const [isToggled, setIsToggled] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  /**
   * Send Search Data to Dispatch
   * @param value
   */
  const onSearch = (value: string) => {
    setSearchValue(value);
    dispatch(getParks(isToggled, value));
  };

  /**
   * Toggle Check for State Code or Park Code
   */
  const onToggle = () => setIsToggled(!isToggled);

  /**
   * Filter Parks by State Code
   */
  const parksItem: any = parks?.parks.filter((item: any) => {
    if (
      !isToggled &&
      searchValue
        .toLowerCase()
        .split(',')
        .includes(item.addresses[0].stateCode.toLowerCase())
    ) {
      return item;
    } else {
      return isToggled && item;
    }
  });

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
        <div className="search-wrapper">
          <div>
            <span>Search Via State Code</span>
            <Switch onClick={onToggle} />
            <span>Search Via Park Code</span>
          </div>
          <Input.Search
            placeholder={`Enter ${isToggled ? 'ParkData' : 'State'} Code`}
            enterButton={`Search based on ${
              isToggled ? 'ParkData' : 'State'
            } Code`}
            size="large"
            onSearch={onSearch}
          />
        </div>
        <ParkList parksData={parksItem} />
      </Content>
    </Layout>
  );
};

export default Parks;
