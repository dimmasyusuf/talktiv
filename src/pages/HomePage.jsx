import { Flex, useBreakpointValue } from '@chakra-ui/react';
import TagList from '../components/TagList';
import ThreadList from '../components/ThreadList';

export default function HomePage() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="row"
      py="8"
      px={{ base: 4, sm: 6 }}
      wrap={{ base: 'wrap', md: 'nowrap' }}
      gap="8"
    >
      {isSmallScreen === false && <TagList />}
      <ThreadList />
    </Flex>
  );
}
