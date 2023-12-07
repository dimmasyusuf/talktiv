import { Flex, Heading, Text } from '@chakra-ui/react';
import RegisterForm from '../components/RegisterForm';
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <Flex
      w="100%"
      h="100dvh"
      align="center"
      justify="center"
      p="6"
    >
      <Flex
        direction="column"
        w={{ base: '100%', md: '448px' }}
        h="100vh"
        justify="center"
      >
        <Flex
          direction="column"
          mb="8"
          justify="center"
          align="center"
        >
          <Logo />
          <Heading>Create an account</Heading>
          <Text textAlign="center">
            Join Talktiv Community & Unlock Your Voice!
          </Text>
        </Flex>
        <RegisterForm register={onRegister} />
      </Flex>
    </Flex>
  );
}
