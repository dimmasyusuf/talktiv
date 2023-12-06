import { Avatar, Flex, IconButton, Text } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import { postedAt } from '../utils/index';

export default function ThreadCommentItem({
  id,
  owner,
  createdAt,
  content,
  upVote,
  downVote,
  upVotesBy,
}) {
  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  return (
    <Flex
      direction="column"
      w="100%"
    >
      <Flex
        w="100%"
        align="center"
        justify="space-between"
        mb="2"
      >
        <Flex
          align="center"
          gap="4"
        >
          <Avatar
            name="Dimas Yusuf Qurohman"
            size="sm"
            rounded="sm"
          />
          <Text as="b">{owner?.name}</Text>
        </Flex>
        <Text fontSize="sm">{postedAt(createdAt)}</Text>
      </Flex>
      <Text mb="2">{content}</Text>
      <Flex
        gap="4"
        align="center"
      >
        <IconButton
          icon={<ArrowUpIcon />}
          rounded="sm"
          size="sm"
          onClick={onUpVoteClick}
        />
        <Text>{upVotesBy?.length}</Text>
        <IconButton
          icon={<ArrowDownIcon />}
          rounded="sm"
          size="sm"
          onClick={onDownVoteClick}
        />
      </Flex>
    </Flex>
  );
}

ThreadCommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};
