import {
  Button,
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

export default function TagModal() {
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
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
