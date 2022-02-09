import React from 'react';

import useStyles from './useStyles';

const Hello = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>Hello from React</div>
    </div>
  );
};

export default Hello;
