import { Flex, useBreakpointValue } from '@chakra-ui/react';
import ThreadModal from './ThreadModal';
import TagModal from './TagModal';
import ThreadItem, { threadItemShape } from './ThreadItem';
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
          />
        ))}
      </Flex>
    </Flex>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  addThread: PropTypes.func.isRequired,
  upVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  onClickCategory: PropTypes.func.isRequired,
  params: PropTypes.string.isRequired,
};
