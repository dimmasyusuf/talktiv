import {
  Avatar,
  Button,
  Flex,
  Icon,
  IconButton,
  Text,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
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
    <Flex
      direction="column"
      mt={isLoading ? '2' : '0'}
    >
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
            <SkeletonCircle
              isLoaded={!isLoading}
              rounded="sm"
              size="12"
            >
              <Avatar
                name={user?.name}
                rounded="sm"
              />
            </SkeletonCircle>
            <Flex direction="column">
              <SkeletonText
                isLoaded={!isLoading}
                rounded="sm"
                noOfLines={1}
                skeletonHeight="4"
                mt={isLoading ? '2' : '0'}
              >
                <Text
                  as="b"
                  fontSize="lg"
                  noOfLines="1"
                  w="100%"
                >
                  {user?.name}
                </Text>
              </SkeletonText>
              <SkeletonText
                isLoaded={!isLoading}
                rounded="sm"
                noOfLines={1}
                mt={isLoading ? '2' : '0'}
              >
                <Text fontSize="sm">{postedAt(createdAt)}</Text>
              </SkeletonText>
            </Flex>
          </Flex>
          <Skeleton
            isLoaded={!isLoading}
            rounded="sm"
            height="24px"
            width="12px"
          >
            <Icon
              as={BiDotsVertical}
              w="24px"
              h="24px"
            />
          </Skeleton>
        </Flex>
        <Flex direction="column">
          <SkeletonText
            isLoaded={!isLoading}
            rounded="sm"
            noOfLines={1}
            skeletonHeight="4"
            mt={isLoading ? '2' : '0'}
          >
            <Text
              as="b"
              fontSize="lg"
            >
              {title}
            </Text>
          </SkeletonText>
          <SkeletonText
            isLoaded={!isLoading}
            rounded="sm"
            noOfLines={4}
            mt={isLoading ? '2' : '0'}
          >
            <Text
              mb="2"
              textAlign="justify"
            >
              {parse(`${body}`)}
            </Text>
          </SkeletonText>
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
          <Skeleton
            isLoaded={!isLoading}
            rounded="sm"
            mt={isLoading ? '2' : '0'}
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
          </Skeleton>
          <SkeletonText
            isLoaded={!isLoading}
            rounded="sm"
            noOfLines={1}
            skeletonHeight="4"
            mt={isLoading ? '2' : '0'}
          >
            <Text>{upVotesBy?.length}</Text>
          </SkeletonText>
          <Skeleton
            isLoaded={!isLoading}
            rounded="sm"
            mt={isLoading ? '2' : '0'}
          >
            <IconButton
              icon={<ArrowDownIcon />}
              rounded="sm"
              size="sm"
              onClick={onDownVoteClick}
            />
          </Skeleton>
        </Flex>
        <Skeleton
          isLoaded={!isLoading}
          rounded="sm"
          mt={isLoading ? '2' : '0'}
        >
          <Button
            leftIcon={<ChatIcon />}
            rounded="sm"
            fontWeight="normal"
            size="sm"
          >
            {totalComments}
          </Button>
        </Skeleton>
      </Flex>
    </Flex>
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
