import { Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import NavbarMenu from './NavbarMenu';
import NavbarMenuMobile from './NavbarMenuMobile';

export default function Navigation() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      py={4}
      px={{ base: 4, sm: 6 }}
      justify="space-between"
      align="center"
    >
      <Heading>Talktiv</Heading>
      {isSmallScreen ? <NavbarMenuMobile /> : <NavbarMenu />}
    </Flex>
  );
}
