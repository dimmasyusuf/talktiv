import { Button, Flex, Text, Textarea } from '@chakra-ui/react';
import ThreadCommentItem from './ThreadCommentItem';
import PropTypes, { object } from 'prop-types';
import { useState } from 'react';

export default function ThreadComment({
  id,
  addComment,
  upVoteComment,
  downVoteComment,
  comments,
  authUser,
}) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment, id);
    setComment('');
  };

  return (
    <Flex direction="column">
      <Text
        as="b"
        mb="2"
      >
        Comment
      </Text>
      <form>
        <Textarea
          rounded="sm"
          h="128px"
          mb="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          type="submit"
          w="100%"
          rounded="sm"
          bg="gray.700"
          color="white"
          _hover={{ bg: 'gray.800' }}
          mb="6"
          onClick={handleSubmit}
        >
          Send
        </Button>
      </form>
      <Flex
        direction="column"
        gap="4"
      >
        {comments?.map((comment) => (
          <ThreadCommentItem
            {...comment}
            key={comment.id}
            authUser={authUser}
            upVote={upVoteComment}
            downVote={downVoteComment}
          />
        ))}
      </Flex>
    </Flex>
  );
}

ThreadComment.propTypes = {
  id: PropTypes.string,
  addComment: PropTypes.func,
  upVoteComment: PropTypes.func,
  downVoteComment: PropTypes.func,
  comments: PropTypes.arrayOf(object),
  authUser: PropTypes.object,
};
