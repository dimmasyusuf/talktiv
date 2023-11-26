import { Flex } from '@chakra-ui/react';
import LeaderboardItem from './LeaderboardItem';

export default function Leaderboard() {
  return (
    <Flex
      w="100%"
      direction="column"
      gap="4"
    >
      <LeaderboardItem />
      <LeaderboardItem />
      <LeaderboardItem />
      <LeaderboardItem />
      <LeaderboardItem />
    </Flex>
  );
}
