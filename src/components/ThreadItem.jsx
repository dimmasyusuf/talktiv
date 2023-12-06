import { Avatar, Button, Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from '@chakra-ui/icons';
import { BiDotsVertical } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ThreadItem({
  id,
  title,
  body,
  createdAt,
  user,
  upVotesBy,
  upVote,
  downVote,
  totalComments,
}) {
  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  return (
    <Flex direction="column">
      <Flex
        as={Link}
        to={`/threads/${id}`}
        direction="column"
        cursor="pointer"
        w="100%"
      >
        <Flex
          w="100%"
          mb="2"
          justify="space-between"
        >
          <Flex gap="4">
            <Avatar
              name={user.name}
              rounded="sm"
            />
            <Flex direction="column">
              <Text
                as="b"
                fontSize="lg"
                noOfLines="1"
                w="100%"
              >
                {user.name}
              </Text>
              <Text fontSize="sm">{createdAt}</Text>
            </Flex>
          </Flex>
          <Icon
            as={BiDotsVertical}
            w="24px"
            h="24px"
          />
        </Flex>
        <Flex direction="column">
          <Text
            as="b"
            fontSize="lg"
          >
            {title}
          </Text>
          <Text
            mb="2"
            textAlign="justify"
          >
            {body}
          </Text>
        </Flex>
      </Flex>
      <Flex
        gap={{ base: 4, sm: 8 }}
        align="center"
      >
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
          <Text>{upVotesBy.length}</Text>
          <IconButton
            icon={<ArrowDownIcon />}
            rounded="sm"
            size="sm"
            onClick={onDownVoteClick}
          />
        </Flex>
        <Button
          leftIcon={<ChatIcon />}
          rounded="sm"
          fontWeight="normal"
          size="sm"
        >
          {totalComments}
        </Button>
      </Flex>
    </Flex>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  likes: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  like: PropTypes.func,
};
