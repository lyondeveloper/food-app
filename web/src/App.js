import React, { Suspense, lazy, useEffect } from 'react';
import { Router } from '@reach/router';
import { useDispatch } from 'react-redux';

import WebSpinner from '../../core/components/spinner';
import Navbar from '../../core/components/navbar';

import { landingPageActions } from '../../core/redux/landing-page';
import { isResponsive } from '../../core/utils/device';

const LandingPage = lazy(() => import('../../core/components/landing-page'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(landingPageActions.setState({ key: 'isResponsive', value: isResponsive() }));

    return () => dispatch(landingPageActions.resetState());
  }, []);

  return (
    <Suspense fallback={<WebSpinner withOverlay />}>
      <Navbar />
      <Router>
        <LandingPage path="/" />
      </Router>
    </Suspense>
  );
};

export default App;
