import { Flex } from '@chakra-ui/react';
import ThreadDetail from '../components/ThreadDetail';
import ThreadComment from '../components/ThreadComment';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
} from '../states/threadDetail/action';
import {
  asyncAddComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
} from '../states/comments/action';

export default function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVote = (threadId) => {
    dispatch(asyncUpVoteThreadDetail(threadId));
  };

  const onNeutralVote = (threadId) => {
    dispatch(asyncNeutralVoteThreadDetail(threadId));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncDownVoteThreadDetail(threadId));
  };

  const onAddComment = (content) => {
    dispatch(asyncAddComment({ threadId: id, content }));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteComment({ threadId: id, commentId }));
  };

  const onNeutralVoteComment = (commentId) => {
    dispatch(asyncNeutralVoteComment({ threadId: id, commentId }));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncDownVoteComment({ threadId: id, commentId }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <Flex
      direction="column"
      w="100%"
      maxWidth="768px"
      margin="auto"
      px={{ base: 4, sm: 6 }}
      py={{ base: 4, sm: 6 }}
      gap="4"
    >
      <ThreadDetail
        {...threadDetail}
        user={threadDetail.owner}
        upVote={onUpVote}
        neutralVote={onNeutralVote}
        downVote={onDownVote}
      />
      <ThreadComment
        {...threadDetail}
        addComment={onAddComment}
        upVoteComment={onUpVoteComment}
        neutralVoteComment={onNeutralVoteComment}
        downVoteComment={onDownVoteComment}
      />
    </Flex>
  );
}
