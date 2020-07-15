import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReachLink } from '@reach/router';
import { Flex, Box, Link, Heading } from '@chakra-ui/core';

import Dropdown from '../../common/dropdown';
import { constants } from '../../../utils/navbar';
import userDropdownMenu from '../../../utils/user';

const WebNavbarItems = ({ item, isResponsive = false }) => {
  const ItemComponent = item.component;

  const render = (element) => {
    let content;
    if (element.type === constants.triggerComponent)
      content = (
        <>
          {isResponsive ? (
            <Flex paddingX="5px" as="button">
              <Box as={ItemComponent} size="24px" />
            </Flex>
          ) : (
            <Flex as="button">
              <Box as={ItemComponent} size="20px" />
              <Heading fontWeight="normal" size="16px" as="span">
                {' '}
                {element.label}{' '}
              </Heading>
            </Flex>
          )}
        </>
      );

    if (element.type === constants.dropdown) content = <Dropdown title="Account" menu={userDropdownMenu} />;

    if (element.type === constants.link)
      content = (
        <Link id={element.id} as={ReachLink} to={element.path} display="block">
          {element.label}
        </Link>
      );

    return content;
  };

  return (
    <Flex align="center" paddingX="16px">
      {render(item)}
    </Flex>
  );
};

WebNavbarItems.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  isResponsive: PropTypes.bool.isRequired,
};

export default WebNavbarItems;
