import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export default function TagItem({ tagName }) {
  return (
    <>
      <Button
        bg="white"
        rounded="sm"
        borderWidth="2px"
        borderColor="gray.700"
        _hover={{ bg: 'gray.700', color: 'white' }}
      >
        {tagName}
      </Button>
    </>
  );
}

TagItem.propTypes = {
  tagName: PropTypes.string,
};
