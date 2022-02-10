import React from 'react';

import useStyles from './useStyles';

const Hello = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Ruby on Rails + React + Mui</h1>
    </div>
  );
};

export default Hello;
