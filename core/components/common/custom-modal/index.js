import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/core';
import WebButton from '../button';

const CustomModal = ({ isOpen, onClose, menu, children }) => {
  const { id, title, serviceName } = menu;

  return (
    <Modal id={id} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent id={id}>
        <ModalHeader>
          <Text fontSize="3xl">{title}</Text>
          from
          <Text pl="5px" fontWeight="bold" as="span" color="green.main">
            {serviceName}
          </Text>{' '}
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody id={id}>{children}</ModalBody>

        <ModalFooter>
          <WebButton title="Go to Checkout" />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menu: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CustomModal;
