import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import NavbarMenu from './NavbarMenu';
import NavbarMenuMobile from './NavbarMenuMobile';
import { Link } from 'react-router-dom';

export default function Navigation() {
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
      {isSmallScreen ? <NavbarMenuMobile /> : <NavbarMenu />}
    </Flex>
  );
}
