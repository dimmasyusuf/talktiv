import { Avatar, Button, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from '@chakra-ui/icons';
import { BiDotsVertical } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function ThreadItem() {
  return (
    <Flex
      as={Link}
      to="/:id"
      direction="column"
      cursor="pointer"
      w="100%"
    >
      <Flex
        w="100%"
        mb="2"
        justify="space-between"
      >
        <Flex gap="4">
          <Avatar
            name="Dimas Yusuf Qurohman"
            rounded="sm"
          />
          <Flex direction="column">
            <Text
              as="b"
              fontSize="lg"
              noOfLines="1"
              w="100%"
            >
              Dimas Yusuf Qurohman
            </Text>
            <Text fontSize="sm">2 minutes ago</Text>
          </Flex>
        </Flex>
        <Icon
          as={BiDotsVertical}
          w="24px"
          h="24px"
        />
      </Flex>
      <Flex direction="column">
        <Text
          as="b"
          fontSize="lg"
        >
          What is your problem?
        </Text>
        <Text
          mb="2"
          textAlign="justify"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Flex
          gap={{ base: 4, sm: 8 }}
          align="center"
        >
          <Flex
            gap="4"
            align="center"
          >
            <IconButton
              icon={<ArrowUpIcon />}
              rounded="sm"
              size="sm"
            />
            <Text>28</Text>
            <IconButton
              icon={<ArrowDownIcon />}
              rounded="sm"
              size="sm"
            />
          </Flex>
          <Button
            leftIcon={<ChatIcon />}
            rounded="sm"
            fontWeight="normal"
            size="sm"
          >
            4
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
