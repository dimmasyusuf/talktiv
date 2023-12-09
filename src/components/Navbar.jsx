import { Flex, Heading, Skeleton, useBreakpointValue } from '@chakra-ui/react';
import NavbarMenu from './NavbarMenu';
import NavbarMenuMobile from './NavbarMenuMobile';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function Navbar({ authUser, signOut }) {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });
  const isLoading = useSelector((states) => states.loading);

  return (
    <Flex
      py={4}
      px={{ base: 4, sm: 6 }}
      w="100%"
      mx="auto"
      justify="space-between"
      align="center"
    >
      <Skeleton
        isLoaded={!isLoading}
        rounded="sm"
      >
        <Heading
          as={Link}
          to="/"
        >
          Talktiv.
        </Heading>
      </Skeleton>
      {isSmallScreen ? (
        <Skeleton
          isLoaded={!isLoading}
          rounded="sm"
        >
          <NavbarMenuMobile
            authUser={authUser}
            signOut={signOut}
          />
        </Skeleton>
      ) : (
        <NavbarMenu
          authUser={authUser}
          signOut={signOut}
        />
      )}
    </Flex>
  );
}

const authUserShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
};

Navbar.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  signOut: PropTypes.func,
};
