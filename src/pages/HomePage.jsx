import { Flex, useBreakpointValue } from '@chakra-ui/react';
import TagList from '../components/TagList';
import ThreadList from '../components/ThreadList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncAddThread,
  asyncUpVoteThread,
  asyncNeutralVoteThread,
  asyncDownVoteThread,
} from '../states/threads/action';

export default function HomePage() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const onUpVote = (threadId) => {
    dispatch(asyncUpVoteThread(threadId));
  };

  const onNeutralVote = (threadId) => {
    dispatch(asyncNeutralVoteThread(threadId));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  console.log(threadList);

  return (
    <Flex
      direction="row"
      py={{ base: 4, sm: 6 }}
      px={{ base: 4, sm: 6 }}
      gap="8"
    >
      {isSmallScreen === false && <TagList />}
      <ThreadList
        threads={threadList}
        addThread={onAddThread}
        upVote={onUpVote}
        neutralVote={onNeutralVote}
        downVote={onDownVote}
      />
    </Flex>
  );
}
