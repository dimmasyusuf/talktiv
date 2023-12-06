import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { RiNewspaperLine } from 'react-icons/ri';
import TagList from './TagList';
import PropTypes from 'prop-types';

export default function TagModal({ threads }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        icon={<RiNewspaperLine />}
        aria-label="Open Tag List"
        rounded="sm"
        borderWidth="thin"
        borderColor="gray.700"
        _hover={{ bg: 'gray.700', color: 'white' }}
      />

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
            <TagList threads={threads} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

TagModal.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
};
