import { Button, Flex, Text, Textarea } from '@chakra-ui/react';
import ThreadCommentItem from './ThreadCommentItem';

export default function ThreadComment() {
  return (
    <Flex direction="column">
      <Text
        as="b"
        mb="2"
      >
        Comment
      </Text>
      <form>
        <Textarea
          rounded="sm"
          h="128px"
          mb="4"
        />
        <Button
          type="submit"
          w="100%"
          rounded="sm"
          bg="gray.700"
          color="white"
          _hover={{ bg: 'gray.800' }}
          mb="6"
        >
          Send
        </Button>
      </form>
      <Flex
        direction="column"
        gap="4"
      >
        <ThreadCommentItem />
        <ThreadCommentItem />
      </Flex>
    </Flex>
  );
}
