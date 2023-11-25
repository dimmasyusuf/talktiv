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

export default function NavbarMenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authUser = false;

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
        gap="2"
        p="2"
        rounded="sm"
        _hover={{ bg: 'white' }}
      >
        <Avatar
          name="Dimas Yusuf Qurohman"
          size="sm"
          rounded="sm"
        />
        <Icon as={ChevronDownIcon} />
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
              <Avatar name="Dimas Yusuf Qurohman" />
              <Flex direction="column">
                <Text
                  fontSize="md"
                  noOfLines="1"
                  as="b"
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
          </DrawerHeader>
          <DrawerBody>
            <Flex
              direction="column"
              gap="4"
            >
              <Button
                gap="2"
                justifyContent="left"
                rounded="sm"
                _hover={{ bg: 'white' }}
              >
                <Icon
                  as={RiChatSmile2Line}
                  boxSize="6"
                />
                Thread
              </Button>
              <Button
                gap="2"
                justifyContent="left"
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
            >
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
