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
import { HamburgerIcon } from '@chakra-ui/icons';
import { RiChatSmile2Line, RiFlagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function NavbarMenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Flex
              w="100%"
              gap="4"
            >
              <Button
                as={Link}
                to="/login"
                w="100%"
              >
                Login
              </Button>
              <Button
                as={Link}
                to="/register"
                w="100%"
                bg="gray.700"
                color="white"
                _hover={{ bg: 'gray.800' }}
              >
                Join
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
