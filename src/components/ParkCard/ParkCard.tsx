import './ParkCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Tag } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

/**|
 * Single Park Card
 * @param props
 * @constructor
 */
const ParkCard = (props: any) => {
  const { id, name, images, description, activities, addresses } = props.park;
  return (
    <Card
      size="default"
      cover={<img alt={images[0].altText} src={images[0].url} />}
    >
      <Meta title={name} description={description} />
      <h3>
        State Code: <span>{addresses[0].stateCode}</span>
      </h3>

      <h3>Activities:</h3>
      <div className="park-data-tag">
        {activities.map((activity: any) => (
          <Tag key={activity.id}>{activity.name}</Tag>
        ))}
      </div>
      <Link to={`/parks/${id}`}>
        <InfoCircleOutlined />
        More Details...
      </Link>
    </Card>
  );
};

export default ParkCard;
