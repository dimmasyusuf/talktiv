import { Button, Skeleton } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function TagItem({ category, onClickCategory, params }) {
  const isLoading = useSelector((states) => states.loading);

  return (
    <Skeleton
      isLoaded={!isLoading}
      rounded="sm"
    >
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
    </Skeleton>
  );
}

TagItem.propTypes = {
  category: PropTypes.string,
  onClickCategory: PropTypes.func,
  params: PropTypes.string,
};
