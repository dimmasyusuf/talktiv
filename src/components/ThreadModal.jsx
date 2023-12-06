import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ThreadModal({ addThread }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    addThread({ title, body, category });
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        w="100%"
        rounded="sm"
        bg="gray.700"
        color="white"
        _hover={{ bg: 'gray.800' }}
      >
        Create Thread
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        rounded="sm"
        size={{ base: 'full', md: 'xl' }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader align="center">Create Thread</ModalHeader>
          <ModalBody>
            <Flex
              direction="column"
              gap="2"
            >
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your title"
                  rounded="sm"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Tag</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your tag"
                  rounded="sm"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Thread</FormLabel>
                <Textarea
                  type="text"
                  rounded="sm"
                  h="256px"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter gap="4">
            <Button
              onClick={onClose}
              rounded="sm"
              bg="white"
              borderWidth="2px"
              borderColor="gray.700"
              _hover={{ bg: 'gray.700', color: 'white' }}
            >
              Close
            </Button>
            <Button
              type="submit"
              rounded="sm"
              bg="gray.700"
              color="white"
              _hover={{ bg: 'gray.800' }}
              w="100%"
              onClick={handleSubmit}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

ThreadModal.propTypes = {
  addThread: PropTypes.func.isRequired,
};
