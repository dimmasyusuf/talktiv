import { SimpleGrid } from '@chakra-ui/react';
import TagItem from './TagItem';

export default function TagList() {
  return (
    <SimpleGrid
      columns={{ base: 2 }}
      w="100%"
      maxWidth={{ base: '100%', md: '300px' }}
      gap="2"
      h="100%"
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
    </SimpleGrid>
  );
}
