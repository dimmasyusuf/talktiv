import { Flex, Heading, Text } from '@chakra-ui/react';
import RegisterForm from '../components/RegisterForm';
import Logo from '../components/Logo';

export default function RegisterPage() {
  return (
    <Flex
      w="100%"
      h="100vh"
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
          gap="2"
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
        <RegisterForm />
      </Flex>
    </Flex>
  );
}
