import { Avatar, Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from '@chakra-ui/icons';

export default function ThreadItem() {
  return (
    <Flex
      direction="row"
      gap="4"
      w="100%"
      cursor="pointer"
    >
      <Avatar
        name="Dimas Yusuf Qurohman"
        rounded="sm"
      />
      <Flex direction="column">
        <Flex
          direction="column"
          mb="2"
        >
          <Text
            as="b"
            fontSize="lg"
          >
            Dimas Yusuf Qurohman
          </Text>
          <Text fontSize="sm">2 minutes ago</Text>
        </Flex>
        <Text
          mb="4"
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
            />
            <Text>28</Text>
            <IconButton
              icon={<ArrowDownIcon />}
              rounded="sm"
            />
          </Flex>
          <Button
            leftIcon={<ChatIcon />}
            rounded="sm"
            fontWeight="normal"
          >
            4
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
