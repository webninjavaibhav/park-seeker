import React from 'react';
import ParkCard from '../ParkCard/ParkCard';
import { IParks } from '../../store/Parks/IParks';
import './ParkList.css';

/**
 * Park Data Interface
 */
export interface Props {
  parksData: IParks[];
}

/**
 * Park List based on Search Term
 * @param props
 * @constructor
 */
const ParkList = (props: Props) => {
  const { parksData } = props;
  return (
    <div className="park-card-wrapper">
      {parksData.map((park: IParks) => (
        <ParkCard key={park.id} park={park} />
      ))}
    </div>
  );
};

export default ParkList;
