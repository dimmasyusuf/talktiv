import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import NavbarMenu from './NavbarMenu';
import NavbarMenuMobile from './NavbarMenuMobile';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar({ authUser, signOut }) {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      py={4}
      px={{ base: 4, sm: 6 }}
      w="100%"
      mx="auto"
      justify="space-between"
      align="center"
    >
      <Heading
        as={Link}
        to="/"
      >
        Talktiv.
      </Heading>
      {isSmallScreen ? (
        <NavbarMenuMobile
          authUser={authUser}
          signOut={signOut}
        />
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};
