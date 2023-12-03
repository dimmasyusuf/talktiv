import { Avatar, Flex, IconButton, Text } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';

export default function ThreadCommentItem() {
  return (
    <Flex
      direction="column"
      w="100%"
    >
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        mb="2"
      >
        <Flex
          align="center"
          gap="4"
        >
          <Avatar
            name="Dimas Yusuf Qurohman"
            size="sm"
            rounded="sm"
          />
          <Text as="b">Dimas Yusuf Qurohman</Text>
        </Flex>
        <Text fontSize="sm">2 minutes ago</Text>
      </Flex>
      <Text mb="2">Lorem ipsum dolor.</Text>
      <Flex
        gap="4"
        align="center"
      >
        <IconButton
          icon={<ArrowUpIcon />}
          rounded="sm"
          size="sm"
        />
        <Text>4</Text>
        <IconButton
          icon={<ArrowDownIcon />}
          rounded="sm"
          size="sm"
        />
      </Flex>
    </Flex>
  );
}
