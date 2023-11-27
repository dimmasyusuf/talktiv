import { Flex, Heading } from '@chakra-ui/react';
import TagList from '../components/TagList';

export default function HomePage() {
  return (
    <Flex
      direction="row"
      py="8"
    >
      <TagList />
      <Flex
        w="100%"
        px={{ base: 4, sm: 6 }}
      >
        <Heading>Talktiv</Heading>
      </Flex>
    </Flex>
  );
}
