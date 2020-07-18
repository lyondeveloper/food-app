import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReachLink } from '@reach/router';
import { Flex, Link, Heading, useDisclosure, Image, List, ListItem, ListIcon } from '@chakra-ui/core';

import { constants } from '../../../utils/navbar';

import Dropdown from '../../common/dropdown';
import CustomDrawer from '../../common/custom-drawer';
import CartDropdown from '../../cart-dropdown';

const WebNavbarItems = ({ item, isResponsive = false }) => {
  const ItemComponent = item.component;

  const { onOpen, onClose, isOpen } = useDisclosure();

  const render = (element) => {
    let content;

    const { childMenu = {} } = element;

    if (element.type === constants.triggerComponent)
      content = (
        <>
          {isResponsive ? (
            <Flex paddingX="5px" as="button">
              <ItemComponent size="30px" />
            </Flex>
          ) : (
            <Flex as="button" align="center">
              <ItemComponent size="24px" />
              <Heading fontWeight="normal" size="16px" as="span">
                {' '}
                {element.label}{' '}
              </Heading>
            </Flex>
          )}
        </>
      );

    if (element.type === constants.cart) {
      content = <CartDropdown menu={element} rightIcon={element.component} />;
    }

    if (element.type === constants.dropdown) {
      content = (
        <>
          {isResponsive ? (
            <>
              <Image rounded="full" size="30px" src="https://bit.ly/dan-abramov" onClick={onOpen} />
              <CustomDrawer
                headerTitle={childMenu.title}
                onClose={onClose}
                isOpen={isOpen}
                placement="right"
                withButton={false}
              >
                {childMenu.options.map((option) => {
                  const OptionIcon = option.icon;
                  return (
                    <List spacing={3}>
                      <Flex paddingY="10px" align="center">
                        <OptionIcon as={ListIcon} size="30px" />
                        <ListItem paddingLeft="10px">
                          <Link id={option.id} as={ReachLink} to={option.path}>
                            {option.label}
                          </Link>
                        </ListItem>
                      </Flex>
                    </List>
                  );
                })}
              </CustomDrawer>
            </>
          ) : (
            <Dropdown
              buttonColor="white"
              buttonText="Logout"
              title="Account"
              menu={childMenu}
              imageSrc="https://bit.ly/dan-abramov"
              imageSize="30px"
            />
          )}
        </>
      );
    }

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
