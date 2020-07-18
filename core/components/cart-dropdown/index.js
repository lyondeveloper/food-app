import React, { useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import { useDisclosure, Flex, Divider, Text, Grid } from '@chakra-ui/core';
import QuantityInput from './quantity-input';

import CustomModal from '../common/custom-modal';

const CartDropdown = ({ rightIcon, menu = {} }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const { cart: { totalCost, items = {} } = {} } = useSelector((state) => state, shallowEqual);

  const Icon = rightIcon;

  const renderItems = useCallback(
    () =>
      Object.keys(items).length > 0 &&
      Object.keys(items).map((key) => (
        <>
          <Divider />
          <Grid templateColumns="50% 50%" direction="row">
            <Flex direction="column">
              <Text textTransform="capitalize" fontSize="24px" fontWeight="bold" as="span">
                {items[key].label}
              </Text>

              <Flex direction="column">
                {items[key].childItems.length > 0 &&
                  items[key].childItems.map((childItem) => (
                    <Text textAlign="left" fontSize="14px">
                      {' '}
                      {childItem.label}{' '}
                    </Text>
                  ))}
              </Flex>
              <Text as="span" fontWeight="bold" fontSize="20px" color="blue.main">
                {items[key].cost}$
              </Text>
            </Flex>

            <Flex alignSelf="center" justifySelf="flex-end" direction="column">
              <QuantityInput field={items[key]} />
            </Flex>
          </Grid>
        </>
      )),
    [items, totalCost],
  );

  return (
    <>
      <Flex onClick={onOpen} as="button">
        <Icon size="24px" />
        {menu.label}
      </Flex>
      <CustomModal menu={menu.childMenu} isOpen={isOpen} onClose={onClose}>
        {renderItems()}
        <Divider />
        <Flex direction="row" justifyContent="flex-end">
          <Text fontWeight="bold" as="span" fontSize="16px">
            Total:{' '}
          </Text>
          <Text pl="10px" fontWeight="bold" color="blue.main" as="span" fontSize="16px">
            {totalCost}$
          </Text>
        </Flex>
      </CustomModal>
    </>
  );
};

CartDropdown.propTypes = {
  rightIcon: PropTypes.element.isRequired,
  menu: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CartDropdown;
