import { Flex } from '@chakra-ui/react';
import TagItem from './TagItem';

export default function TagList() {
  return (
    <Flex
      w="100%"
      maxWidth="300px"
      px={{ base: 4, sm: 6 }}
      gap="2"
      wrap="wrap"
    >
      <TagItem tagName="All" />
      <TagItem tagName="Technology" />
      <TagItem tagName="Science" />
      <TagItem tagName="Finance" />
      <TagItem tagName="Society" />
      <TagItem tagName="Entertainment" />
      <TagItem tagName="Health" />
      <TagItem tagName="History" />
      <TagItem tagName="News" />
    </Flex>
  );
}
