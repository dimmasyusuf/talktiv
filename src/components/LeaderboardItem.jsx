import { Avatar, Flex, Text } from '@chakra-ui/react';
import PropTypes, { object } from 'prop-types';

export default function LeaderboardItem({ index, score, user }) {
  return (
    <Flex align="center">
      <Text
        as="b"
        fontSize="lg"
        mr="4"
      >
        {index + 1}
      </Text>
      <Flex
        align="center"
        justify="space-between"
        w="100%"
      >
        <Flex
          gap="4"
          align="center"
        >
          <Avatar
            name={user?.name}
            rounded="sm"
          />
          <Text
            fontSize="lg"
            noOfLines="1"
          >
            {user?.name}
          </Text>
        </Flex>
        <Text fontSize="lg">{score}</Text>
      </Flex>
    </Flex>
  );
}

LeaderboardItem.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  user: PropTypes.shape(object),
};
