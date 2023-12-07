import { Avatar, Flex, IconButton, Text } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import { postedAt } from '../utils/index';
import parse from 'html-react-parser';

export default function ThreadCommentItem({
  id,
  owner,
  createdAt,
  content,
  upVote,
  downVote,
  upVotesBy,
  authUser,
}) {
  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const isThreadVoted = upVotesBy?.includes(authUser?.id);

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
      <Text mb="2">{parse(`${content}`)}</Text>
      <Flex
        gap="4"
        align="center"
      >
        <IconButton
          icon={<ArrowUpIcon />}
          rounded="sm"
          size="sm"
          onClick={onUpVoteClick}
          bg={isThreadVoted ? 'gray.700' : 'white'}
          color={isThreadVoted ? 'white' : 'black'}
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
  id: PropTypes.string,
  owner: PropTypes.object,
  createdAt: PropTypes.string,
  content: PropTypes.string,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  upVotesBy: PropTypes.array,
  authUser: PropTypes.object,
};
