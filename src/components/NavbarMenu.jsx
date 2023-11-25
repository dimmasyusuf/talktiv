import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex,
  Button,
  Icon,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { RiChatSmile2Line, RiFlagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function NavbarMenu() {
  const authUser = false;

  if (authUser === null) {
    return (
      <Flex gap="4">
        <Button
          as={Link}
          to="/register"
          rounded="sm"
          borderWidth="thin"
          borderColor="gray.700"
          _hover={{ bg: 'gray.700', color: 'white' }}
        >
          Register
        </Button>
        <Button
          as={Link}
          to="/login"
          bg="gray.700"
          color="white"
          _hover={{ bg: 'gray.800' }}
          rounded="sm"
        >
          Login
        </Button>
      </Flex>
    );
  }

  return (
    <Flex gap="8">
      <Flex gap="4">
        <Button
          as={Link}
          to="/"
          gap="2"
          rounded="sm"
          _hover={{ bg: 'white' }}
        >
          <Icon
            as={RiChatSmile2Line}
            boxSize="6"
          />
          Threads
        </Button>
        <Button
          as={Link}
          to="/leaderboard"
          gap="2"
          rounded="sm"
          _hover={{ bg: 'white' }}
        >
          <Icon
            as={RiFlagLine}
            boxSize="6"
          />
          Leaderboard
        </Button>
      </Flex>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          p="2"
          rounded="sm"
          _hover={{ bg: 'white' }}
        >
          <Avatar
            name="Dimas Yusuf Qurohman"
            size="sm"
            rounded="sm"
          />
        </MenuButton>
        <MenuList
          w="300px"
          rounded="sm"
        >
          <MenuItem mb="8">
            <Flex
              direction="row"
              gap="4"
              w="100%"
            >
              <Avatar
                name="Dimas Yusuf Qurohman"
                size="md"
                rounded="sm"
              />
              <Flex direction="column">
                <Text
                  as="b"
                  fontSize="md"
                  noOfLines="1"
                >
                  Dimas Yusuf Qurohman
                </Text>
                <Text
                  fontSize="xs"
                  noOfLines="1"
                >
                  dimasyusufqurohman@gmail.com
                </Text>
              </Flex>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Button
              bg="gray.700"
              color="white"
              w="100%"
              rounded="sm"
              _hover={{ bg: 'gray.800' }}
            >
              Logout
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
