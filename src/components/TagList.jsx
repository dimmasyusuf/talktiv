import { SimpleGrid } from '@chakra-ui/react';
import TagItem from './TagItem';
import PropTypes from 'prop-types';

export default function TagList({ categories, onClickCategory, params }) {
  return (
    <SimpleGrid
      columns={{ base: 2 }}
      w="100%"
      maxWidth={{ base: '100%', md: '300px' }}
      gap="2"
      h="100%"
    >
      {categories?.map((category, index) => (
        <TagItem
          key={index}
          category={category}
          onClickCategory={onClickCategory}
          params={params}
        />
      ))}
    </SimpleGrid>
  );
}

TagList.propTypes = {
  categories: PropTypes.array,
  onClickCategory: PropTypes.func,
  params: PropTypes.string,
};
