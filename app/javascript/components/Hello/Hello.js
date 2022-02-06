import React from 'react';

import useStyles from './useStyles';

const Hello = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>Working</div>
    </div>
  );
};

export default Hello;
