import {
  Avatar,
  Button,
  Flex,
  Icon,
  IconButton,
  Text,
  Skeleton,
} from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from '@chakra-ui/icons';
import { BiDotsVertical } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postedAt } from '../utils/index';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

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
  authUser,
}) {
  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const isThreadVoted = upVotesBy?.includes(authUser?.id);

  const isLoading = useSelector((states) => states.loading);

  return (
    <Skeleton isLoaded={!isLoading}>
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
                name={user?.name}
                rounded="sm"
              />
              <Flex direction="column">
                <Text
                  as="b"
                  fontSize="lg"
                  noOfLines="1"
                  w="100%"
                >
                  {user?.name}
                </Text>
                <Text fontSize="sm">{postedAt(createdAt)}</Text>
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
              {parse(`${body}`)}
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
              bg={isThreadVoted ? 'gray.700' : 'gray.100'}
              color={isThreadVoted ? 'white' : 'black'}
              _focus={{ bg: 'gray.700', color: 'white' }}
            />
            <Text>{upVotesBy?.length}</Text>
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
    </Skeleton>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  user: PropTypes.object,
  upVotesBy: PropTypes.array,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  totalComments: PropTypes.number,
  authUser: PropTypes.object,
};
