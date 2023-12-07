import { Flex, useBreakpointValue } from '@chakra-ui/react';
import ThreadModal from './ThreadModal';
import TagModal from './TagModal';
import ThreadItem from './ThreadItem';
import PropTypes from 'prop-types';

export default function ThreadList({
  threads,
  addThread,
  upVote,
  neutralVote,
  downVote,
  categories,
  onClickCategory,
  params,
  authUser,
}) {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="column"
      w="100%"
      gap="6"
    >
      <Flex
        w="100%"
        gap="4"
      >
        <ThreadModal addThread={addThread} />
        {isSmallScreen && (
          <TagModal
            categories={categories}
            onClickCategory={onClickCategory}
            params={params}
          />
        )}
      </Flex>
      <Flex
        direction="column"
        gap="4"
      >
        {threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            {...thread}
            upVote={upVote}
            neutralVote={neutralVote}
            downVote={downVote}
            authUser={authUser}
          />
        ))}
      </Flex>
    </Flex>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.array,
  addThread: PropTypes.func,
  upVote: PropTypes.func,
  neutralVote: PropTypes.func,
  downVote: PropTypes.func,
  categories: PropTypes.array,
  onClickCategory: PropTypes.func,
  params: PropTypes.string,
  authUser: PropTypes.object,
};
