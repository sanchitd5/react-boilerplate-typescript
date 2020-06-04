/***
* Created by Sanchit Dang :  5 June 2020
* sanchitd5@github.com
***/

import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Routes } from "bricks";
import { ContextManager } from "contexts";
const App = () => {
  useEffect(() => {
    document.title = process.env.REACT_APP_NAME;
  }, []);
  return (
    <ContextManager>
      <Routes />
    </ContextManager>
  );
}

export default withRouter(App);
