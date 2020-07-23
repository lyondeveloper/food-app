import React, { Suspense, lazy, useEffect } from 'react';
import { Router } from '@reach/router';
import { useDispatch } from 'react-redux';

import WebSpinner from '../../core/components/spinner';
import Navbar from '../../core/components/navbar';

import { appActions } from '../../core/redux/app';
import { isResponsive } from '../../core/utils/device';

const Home = lazy(() => import('../../core/components/home'));
const Service = lazy(() => import('../../core/components/service'));
const NotFound = lazy(() => import('../../core/components/not-found'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.setState({ key: 'isResponsive', value: isResponsive() }));

    return () => dispatch(appActions.resetState());
  }, []);

  return (
    <>
      <Navbar />
      <Suspense fallback={<WebSpinner withOverlay />}>
        <Router>
          <Home path="/" component={Home} />
          <Service path="/service/:slug" component={Service} />
          <NotFound default component={NotFound} />
        </Router>
      </Suspense>
    </>
  );
};

export default App;
