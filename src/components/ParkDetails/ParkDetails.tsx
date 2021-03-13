import './ParkDetails.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootReducerState } from '../../store/IRootReducerState';
import { Link, useParams } from 'react-router-dom';
import { getParkById } from '../../store/Parks/parkServices';
import { getThings } from '../../store/Things/thingServices';
import { getEvents } from '../../store/Events/eventServices';
import { Carousel, Layout, Menu } from 'antd';
import {
  CheckCircleOutlined,
  MailOutlined,
  PhoneOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;

/**
 * Params Interface
 */
export interface ParamsType {
  id: string;
}

const ParkDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ParamsType>();
  const park = useSelector((state: IRootReducerState) => state.parks.park);
  const things = useSelector((state: IRootReducerState) => state.things.things);
  const events = useSelector((state: IRootReducerState) => state.events.events);

  /**
   * Get Park By ID from API
   */
  useEffect(() => {
    dispatch(getParkById(id));
  }, [id, dispatch]);

  /**
   * Get ThingsToDo by ParkCode from API
   * Get Events by ParkCode from API
   */
  useEffect(() => {
    dispatch(getThings(park.parkCode));
    dispatch(getEvents(park.parkCode));
  }, [park.parkCode, dispatch]);

  /**
   * Get Park Images
   */
  const getParkImages = () => {
    return park.images?.map((image) => (
      <div>
        <img
          className="park-detail-img"
          key={image.title}
          src={image.url}
          alt={image.altText}
          style={{ height: '400px' }}
        />
      </div>
    ));
  };

  /**
   * Get Operating Hours
   */
  const getParkTimings = () => {
    return (
      park.operatingHours?.length &&
      Object.keys(park.operatingHours[0].standardHours).map((key, i) => (
        <li key={key} className="park-timing">
          <CheckCircleOutlined />
          {key} - {park?.operatingHours[0]?.standardHours[key] as any}
        </li>
      ))
    );
  };

  /**
   * Get Entrance Fee
   */
  const getEntranceFees = () => {
    return (
      park &&
      park.entranceFees.length &&
      park.entranceFees.map((fee) => (
        <div className="entrance-fees" key={fee.title}>
          <h4>
            {fee.title} <strong>({fee.cost} $)</strong>
          </h4>
          <p>{fee.description}</p>
        </div>
      ))
    );
  };

  /**
   * Get Email Address
   */
  const getEmailAddresses = () => {
    return park.contacts.emailAddresses.map((email) => (
      <ul key={email.emailAddress}>
        <li>
          <MailOutlined />
          {email.emailAddress}
        </li>
      </ul>
    ));
  };

  /**
   * Get Phone Numbers
   */
  const getPhoneNumbers = () => {
    return park.contacts.phoneNumbers.map((phoneNumber) => (
      <ul key={phoneNumber.phoneNumber}>
        <li>
          <PhoneOutlined />
          {phoneNumber.extension}
          {phoneNumber.phoneNumber} <strong>({phoneNumber.type})</strong>
        </li>
      </ul>
    ));
  };

  /**
   * Get ThingsToDo
   */
  const getThingsToDo = () => {
    return things.slice(0, 5).map((thing) => (
      <li key={thing.id}>
        <DoubleRightOutlined />
        <strong>{thing.title}</strong> <br />
        {thing.shortDescription}
      </li>
    ));
  };

  /**
   * Get Events Data
   */
  const getEventsData = () => {
    return events.slice(0, 5).map((eventData) => (
      <li key={eventData.id}>
        <strong>{eventData.title}</strong>
        <p>{eventData.description}</p>
      </li>
    ));
  };

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
        <div className="layout-park-details">
          <div>
            <h1>Images: </h1>
            <Carousel autoplay>{getParkImages()}</Carousel>
          </div>
          <div>
            <h1>Operating Hours: </h1>
            {getParkTimings()}
          </div>
          <div>
            <h1>Entrance Fees:</h1>
            {getEntranceFees()}
          </div>
          <div>
            <h1>Contact Details:</h1>
            <div>
              <h4>Email Address:</h4>
              {getEmailAddresses()}
            </div>
            <div>
              <h4>Phone Numbers:</h4>
              {getPhoneNumbers()}
            </div>
          </div>
          <div>
            <h1>
              Map:
              <span>
                <a
                  href={`https://maps.google.com/?q=${park.latitude},${park.longitude}`}
                >
                  Click Here
                </a>
              </span>
            </h1>
          </div>
          <div className="things-todo">
            <h1>Things to do:</h1>
            <ul>{getThingsToDo()}</ul>
          </div>{' '}
          <div className="park-event">
            <h1>Events:</h1>
            <ul>{getEventsData()}</ul>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ParkDetails;
