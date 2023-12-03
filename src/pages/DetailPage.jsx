import { Flex } from '@chakra-ui/react';
import ThreadItem from '../components/ThreadItem';
import ThreadComment from '../components/ThreadComment';

export default function DetailPage() {
  return (
    <Flex
      direction="column"
      w="100%"
      maxWidth="768px"
      margin="auto"
      px={{ base: 4, sm: 6 }}
      py={{ base: 4, sm: 6 }}
      gap="4"
    >
      <ThreadItem />
      <ThreadComment />
    </Flex>
  );
}
