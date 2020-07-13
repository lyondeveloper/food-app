import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const OverlayBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  z-index: 1;
`;

const Overlay = ({ children }) => {
  return (
    <Container>
      <OverlayBackdrop>{children}</OverlayBackdrop>
    </Container>
  );
};

Overlay.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Overlay;
