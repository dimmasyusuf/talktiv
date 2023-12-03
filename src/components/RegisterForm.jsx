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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export default function RegisterForm({ register }) {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const registerSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      register(formik.values);
      setLoading(false);
    }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Flex direction="column">
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          mb="2"
          isInvalid={formik.errors.name && formik.touched.name}
        >
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Full Name"
            rounded="sm"
            name="name"
            onChange={handleForm}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl
          mb="2"
          isInvalid={formik.errors.email && formik.touched.email}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email Address"
            rounded="sm"
            name="email"
            onChange={handleForm}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          mb="6"
          isInvalid={formik.errors.password && formik.touched.password}
        >
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Must be at least 6 characters"
              rounded="sm"
              name="password"
              onChange={handleForm}
            />
            <InputRightElement width="3.5rem">
              <IconButton
                h="1.75rem"
                size="sm"
                onClick={() => setShow(!show)}
                icon={show ? <ViewOffIcon /> : <ViewIcon />}
                rounded="sm"
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          bg="gray.700"
          color="white"
          _hover={{ bg: 'gray.800' }}
          rounded="sm"
          w="100%"
          mb="8"
          isLoading={loading}
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
          textDecoration="underline"
        >
          Login
        </Link>
      </Flex>
    </Flex>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};
