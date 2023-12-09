import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  useDisclosure,
} from '@chakra-ui/react';
import { RiNewspaperLine } from 'react-icons/ri';
import TagList from './TagList';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function TagModal({ categories, onClickCategory, params }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isLoading = useSelector((states) => states.isLoading);

  return (
    <>
      <Skeleton
        isLoaded={!isLoading}
        rounded="sm"
      >
        <IconButton
          onClick={onOpen}
          icon={<RiNewspaperLine />}
          aria-label="Open Tag List"
          rounded="sm"
          borderWidth="thin"
          borderColor="gray.700"
          _hover={{ bg: 'gray.700', color: 'white' }}
        />
      </Skeleton>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: 'full', md: 'xl' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            align="center"
            mb="2"
          >
            Tag List
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TagList
              categories={categories}
              onClickCategory={onClickCategory}
              params={params}
            />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

TagModal.propTypes = {
  categories: PropTypes.array,
  onClickCategory: PropTypes.func,
  params: PropTypes.string,
};
