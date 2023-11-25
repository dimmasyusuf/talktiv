import { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

export default function RegisterForm() {
  const [show, setShow] = useState(false);

  return (
    <Flex direction="column">
      <form>
        <FormControl mb="4">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Full Name"
            rounded="sm"
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email Address"
            rounded="sm"
          />
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <FormControl mb="6">
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Must be at least 6 characters"
              rounded="sm"
            />
            <InputRightElement width="4.5rem">
              <IconButton
                h="1.75rem"
                size="sm"
                onClick={() => setShow(!show)}
                icon={show ? <ViewOffIcon /> : <ViewIcon />}
                rounded="sm"
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage></FormErrorMessage>
        </FormControl>
        <Button
          bg="gray.700"
          color="white"
          _hover={{ bg: 'gray.800' }}
          rounded="sm"
          w="100%"
          mb="8"
        >
          Register
        </Button>
      </form>
      <Flex
        gap="2"
        justify="center"
        align="center"
      >
        <Text>Already have an account?</Text>
        <Link
          as={RouterLink}
          to="/login"
        >
          Login
        </Link>
      </Flex>
    </Flex>
  );
}
