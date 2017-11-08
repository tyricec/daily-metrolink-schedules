import React from 'react';

import Accordion from './Accordion';
import ScheduleSummary from './ScheduleSummary';
import ScheduleTable from './ScheduleTable';

const styles = {
  scheduleContainer: {
    backgroundColor: 'rgb(255,255,255)',
    boxShadow: '0 0 2px rgba(0,0,0,0.75)',
    fontSize: '0.8em',
    margin: '16px 0',
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
  <div>
    {
      props.schedules.map(schedule => (
        <div key={schedule.name} style={styles.scheduleContainer}>
          <div style={styles.scheduleSummary}>
            <ScheduleSummary
              route={schedule.name}
              duration={schedule.duration}
              daysOfWeek={schedule.dayType}
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
