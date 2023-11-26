import { Flex, Heading } from '@chakra-ui/react';
import Logo from '../components/Logo';
import Leaderboard from '../components/Leaderboard';

export default function LeaderboardPage() {
  return (
    <Flex
      justify="center"
      align="center"
      py="8"
      px={{ base: 4, sm: 6 }}
    >
      <Flex
        direction="column"
        w="100%"
        maxWidth="768px"
        align="center"
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          w="100%"
        >
          <Logo />
          <Heading mb="8">Talktiv. League</Heading>
          <Leaderboard />
        </Flex>
      </Flex>
    </Flex>
  );
}
