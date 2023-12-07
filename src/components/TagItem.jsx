import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function TagItem({ category, onClickCategory, params }) {
  return (
    <>
      <Button
        w="100%"
        bg={params === category ? 'gray.700' : 'white'}
        color={params === category ? 'white' : 'black'}
        rounded="sm"
        borderWidth="2px"
        borderColor="gray.700"
        _hover={
          params === category
            ? { bg: 'white', color: 'black' }
            : { bg: 'gray.700', color: 'white' }
        }
        noOfLines="1"
        onClick={() => onClickCategory(category)}
      >
        {category}
      </Button>
    </>
  );
}

TagItem.propTypes = {
  category: PropTypes.string,
  onClickCategory: PropTypes.func,
  params: PropTypes.string,
};
