import { Flex, Heading, Text } from '@chakra-ui/react';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
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
          <Heading>Welcome Back</Heading>
          <Text textAlign="center">Login to continue using Talktiv.</Text>
        </Flex>
        <LoginForm login={onLogin} />
      </Flex>
    </Flex>
  );
}
