import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function TagItem({ tagName }) {
  return (
    <>
      <Button
        w="100%"
        bg="white"
        rounded="sm"
        borderWidth="2px"
        borderColor="gray.700"
        _hover={{ bg: 'gray.700', color: 'white' }}
        noOfLines="1"
      >
        {tagName}
      </Button>
    </>
  );
}

TagItem.propTypes = {
  tagName: PropTypes.string,
};
