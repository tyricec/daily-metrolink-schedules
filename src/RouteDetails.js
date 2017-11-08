import React from 'react';
import RouteMenu from './RouteMenu';
import ScheduleList from './ScheduleList';

const styles = {
  menuContainer: {
    boxShadow: '0 0 4px rgba(0,0,0,0.75)',
  },
  scheduleContainer: {
    padding: 8,
  },
};

const schedules = [{
  name: '701',
  dayType: 'Monday - Friday',
  duration: '04:45 AM - 07:47 AM',
  table: [{
    name: 'South Perris',
    time: '04:45 AM',
  }, {
    name: 'Downtown Perris',
    time: '04:48 AM',
  }, {
    name: 'Moreno Valley/March Field',
    time: '04:57 AM',
  }],
}, {
  name: '703',
  dayType: 'Saturday',
  duration: '06:43 AM - 09:47 AM',
  table: [{
    name: 'South Perris',
    time: '06:43 AM',
  }, {
    name: 'Downtown Perris',
    time: '06:48 AM',
  }, {
    name: 'Moreno Valley/March Field',
    time: '06:57 AM',
  }],
}, {
  name: '705',
  dayType: 'Sunday',
  duration: '01:43 PM - 04:47 PM',
  table: [{
    name: 'South Perris',
    time: '01:43 AM',
  }, {
    name: 'Downtown Perris',
    time: '01:48 AM',
  }, {
    name: 'Moreno Valley/March Field',
    time: '01:57 AM',
  }],
}];

export default () => (
  <div>
    <div style={styles.menuContainer}>
      <RouteMenu />
    </div>
    <div style={styles.scheduleContainer}>
      <ScheduleList schedules={schedules} />
    </div>
  </div>
);
