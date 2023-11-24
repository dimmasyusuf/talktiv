import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NavbarMenu() {
  return (
    <Flex gap="4">
      <Button
        as={Link}
        href="/leaderboard"
      >
        Login
      </Button>
      <Button
        as={Link}
        href="/register"
        background="gray.700"
        color="white"
        _hover={{ background: 'gray.800' }}
      >
        Join
      </Button>
    </Flex>
  );
}
