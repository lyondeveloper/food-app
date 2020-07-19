import React, { Suspense, lazy, useEffect } from 'react';
import { Router } from '@reach/router';
import { useDispatch } from 'react-redux';

import WebSpinner from '../../core/components/spinner';
import Navbar from '../../core/components/navbar';

import { appActions } from '../../core/redux/app';
import { isResponsive } from '../../core/utils/device';

const Home = lazy(() => import('../../core/components/home'));
const NotFound = lazy(() => import('../../core/components/not-found'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.setState({ key: 'isResponsive', value: isResponsive() }));

    return () => dispatch(appActions.resetState());
  }, []);

  return (
    <Suspense fallback={<WebSpinner withOverlay />}>
      <Navbar />
      <Router>
        <Home exact path="/" component={Home} />
        <NotFound default component={NotFound} />
      </Router>
    </Suspense>
  );
};

export default App;
