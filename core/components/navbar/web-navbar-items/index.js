import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReachLink } from '@reach/router';

import { Flex, Box, Link, Heading } from '@chakra-ui/core';

const WebNavbarItems = ({ item, isResponsive = false }) => {
  const ItemComponent = item.component;

  return (
    <>
      {isResponsive ? (
        <Flex paddingX="5px" as="button">
          <Box as={ItemComponent} size="24px" />
        </Flex>
      ) : (
        <Flex paddingX="16px">
          {item.type === 'triggerComponent' ? (
            <>
              <Flex as="button">
                <Box as={ItemComponent} size="20px" />
              </Flex>
              <Heading fontWeight="normal" size="16px" as="span">
                {' '}
                {item.label}{' '}
              </Heading>
            </>
          ) : (
            <Link id={item.id} as={ReachLink} to={item.path} display="block">
              {item.label}
            </Link>
          )}
        </Flex>
      )}
    </>
  );
};

WebNavbarItems.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  isResponsive: PropTypes.bool.isRequired,
};

export default WebNavbarItems;