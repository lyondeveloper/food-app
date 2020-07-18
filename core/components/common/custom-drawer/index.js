import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  DrawerHeader,
} from '@chakra-ui/core';

import WebButton from '../button';

const CustomDrawer = ({
  isOpen,
  onClose,
  placement,
  headerTitle,
  withButton = true,
  showLeftButton = false,
  leftFooterButtonText = '',
  rightFooterButtonText,
  children,
}) => (
  <Drawer isOpen={isOpen} placement={placement} onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader> {headerTitle} </DrawerHeader>

      <DrawerBody>{children}</DrawerBody>
      {withButton && (
        <DrawerFooter>
          {showLeftButton && <WebButton title={leftFooterButtonText} mr={3} onClick={onClose} />}
          <WebButton title={rightFooterButtonText} mr={3} onClick={onClose} />
        </DrawerFooter>
      )}
    </DrawerContent>
  </Drawer>
);

CustomDrawer.propTypes = {
  showLeftButton: PropTypes.bool.isRequired,
  withButton: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  headerTitle: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  leftFooterButtonText: PropTypes.string.isRequired,
  rightFooterButtonText: PropTypes.string.isRequired,
};

export default CustomDrawer;
