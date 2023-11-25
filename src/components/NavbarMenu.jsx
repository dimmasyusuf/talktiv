import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NavbarMenu() {
  return (
    <Flex gap="4">
      <Button
        as={Link}
        to="/login"
      >
        Login
      </Button>
      <Button
        as={Link}
        to="/join"
        background="gray.700"
        color="white"
        _hover={{ background: 'gray.800' }}
      >
        Join
      </Button>
    </Flex>
  );
}
