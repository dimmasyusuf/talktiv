import { SimpleGrid } from '@chakra-ui/react';
import TagItem from './TagItem';
import PropTypes from 'prop-types';

export default function TagList({ threads }) {
  return (
    <SimpleGrid
      columns={{ base: 2 }}
      w="100%"
      maxWidth={{ base: '100%', md: '300px' }}
      gap="2"
      h="100%"
    >
      {threads?.map((thread) => (
        <TagItem
          key={thread.id}
          tagName={thread.category}
        />
      ))}
    </SimpleGrid>
  );
}

TagList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
};
