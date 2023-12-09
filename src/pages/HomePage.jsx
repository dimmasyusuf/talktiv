import { Flex, useBreakpointValue } from '@chakra-ui/react';
import TagList from '../components/TagList';
import ThreadList from '../components/ThreadList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
} from '../states/threads/action';
import { useSearchParams } from 'react-router-dom';

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

  const onDownVote = (threadId) => {
    dispatch(asyncDownVoteThread(threadId));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread?.ownerId),
    authUser: authUser.id,
  }));

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('category');
  const categories = threads.map((thread) => thread?.category);
  const categoriesList = [...new Set(categories)];

  const onClickCategory = (category) => {
    if (params === category) {
      setSearchParams('');
    } else {
      setSearchParams({ category });
    }
  };

  const filteredThreads = threadList.filter((thread) =>
    thread?.category.includes(params)
  );

  return (
    <Flex
      direction="row"
      py={{ base: 4, sm: 6 }}
      px={{ base: 4, sm: 6 }}
      gap="8"
    >
      {isSmallScreen === false && (
        <TagList
          categories={categoriesList}
          onClickCategory={onClickCategory}
          params={params}
        />
      )}
      <ThreadList
        authUser={authUser}
        threads={params ? filteredThreads : threadList}
        addThread={onAddThread}
        upVote={onUpVote}
        downVote={onDownVote}
        categories={categoriesList}
        onClickCategory={onClickCategory}
        params={params}
      />
    </Flex>
  );
}
