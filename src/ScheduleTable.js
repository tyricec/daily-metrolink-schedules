import React from 'react';
import ScheduleRow from './ScheduleRow';

export default props => (
  <div>
    <ScheduleRow name={'Stop'} time={'Departure Time'} />
    {
      props.departures.map(info =>
        <ScheduleRow key={info.name} name={info.name} time={info.time} />
      )
    }
  </div>
);
