import React from 'react';
import moment from 'moment';

import ScheduleRow from './ScheduleRow';

export default props => (
  <div>
    <ScheduleRow name={'Stop'} time={'Departure Time'} />
    {
      props.departures.map(info =>
        <ScheduleRow
          key={info.stop_id}
          name={info.stop_name}
          time={moment(info.arrival_time, 'HH:mm:ss').format('hh:mm a')}
        />
      )
    }
  </div>
);
