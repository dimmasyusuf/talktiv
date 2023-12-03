import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  useDisclosure,
  IconButton,
  Flex,
  Icon,
  Avatar,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { RiChatSmile2Line, RiFlagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavbarMenuMobile({ authUser, signOut }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id, name, email, avatar } = authUser;

  if (authUser === null) {
    return (
      <>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody></DrawerBody>
            <DrawerFooter>
              <Flex
                w="100%"
                gap="4"
              >
                <Button
                  as={Link}
                  to="/register"
                  rounded="sm"
                  borderWidth="thin"
                  borderColor="gray.700"
                  _hover={{ bg: 'gray.700', color: 'white' }}
                  w="100%"
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
                  w="100%"
                >
                  Login
                </Button>
              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <>
      <Button
        onClick={onOpen}
        rightIcon={<ChevronDownIcon />}
        p="2"
        rounded="sm"
        bg="white"
        _hover={{ bg: 'white' }}
      >
        <Avatar
          src={avatar}
          name={name}
          alt={id}
          size="sm"
          rounded="sm"
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex
              direction="row"
              gap="4"
            >
              <Avatar
                src={avatar}
                name={name}
                alt={id}
                rounded="sm"
                size="md"
              />
              <Flex direction="column">
                <Text
                  fontSize="md"
                  noOfLines="1"
                  as="b"
                >
                  {name}
                </Text>
                <Text
                  fontSize="xs"
                  noOfLines="1"
                >
                  {email}
                </Text>
              </Flex>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex
              direction="column"
              gap="4"
            >
              <Button
                as={Link}
                to="/"
                gap="2"
                justifyContent="left"
                rounded="sm"
                bg="white"
                px="0"
                _hover={{ bg: 'white' }}
              >
                <Icon
                  as={RiChatSmile2Line}
                  boxSize="6"
                />
                Thread
              </Button>
              <Button
                as={Link}
                to="/leaderboard"
                gap="2"
                justifyContent="left"
                rounded="sm"
                bg="white"
                px="0"
                _hover={{ bg: 'white' }}
              >
                <Icon
                  as={RiFlagLine}
                  boxSize="6"
                />
                Leaderboard
              </Button>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button
              as={Link}
              to="/"
              w="100%"
              bg="gray.700"
              color="white"
              _hover={{ bg: 'gray.800' }}
              rounded="sm"
              onClick={signOut}
            >
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

NavbarMenuMobile.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};
