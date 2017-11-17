import React from 'react';

import Accordion from './Accordion';
import ScheduleSummary from './ScheduleSummary';
import ScheduleTable from './ScheduleTable';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  scheduleContainer: {
    backgroundColor: 'rgb(255,255,255)',
    boxShadow: '0 0 2px rgba(0,0,0,0.75)',
    fontSize: '0.8em',
    marginTop: '16px',
    marginBottom: '16px',
    marginRight: '16px',
    maxWidth: '480px',
    width: '100%',
  },
  scheduleSummary: {
    backgroundColor: 'rgb(66,134,247)',
    borderLeft: '1px solid rgb(0,0,0)',
    borderTop: '1px solid rgb(0,0,0)',
    borderRight: '1px solid rgb(0,0,0)',
    color: 'rgb(255,255,255)',
    padding: 8,
  },
};

export default (props) => (
  <div style={styles.container}>
    {
      props.schedules.map(schedule => (
        <div key={schedule.trip_short_name} style={styles.scheduleContainer}>
          <div style={{
            ...styles.scheduleSummary,
            backgroundColor: `#${props.route.route_color}`,
          }}>
            <ScheduleSummary
              containerStyle={{ backgroundColor: `#${props.route.route_color}`}}
              route={schedule.trip_short_name}
              duration={schedule.duration}
              daysOfWeek={schedule.dayType.display}
            />
          </div>
          <Accordion>
            <div style={styles.scheduleTable}>
              <ScheduleTable departures={schedule.table} />
            </div>
          </Accordion>
        </div>
      ))
    }
  </div>
);
