import { Flex } from '@chakra-ui/react';
import LeaderboardItem from './LeaderboardItem';
import PropTypes, { object } from 'prop-types';

export default function LeaderboardList({ leaderboards }) {
  console.log(leaderboards);

  return (
    <Flex
      w="100%"
      direction="column"
      gap="4"
    >
      {leaderboards?.map((leaderboard, index) => (
        <LeaderboardItem
          key={index}
          index={index}
          {...leaderboard}
        />
      ))}
    </Flex>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(object).isRequired,
};
