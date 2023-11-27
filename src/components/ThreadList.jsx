import { Flex, useBreakpointValue } from '@chakra-ui/react';
import ThreadModal from './ThreadModal';
import TagModal from './TagModal';
import ThreadItem from './ThreadItem';

export default function ThreadList() {
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
        <ThreadModal />
        {isSmallScreen && <TagModal />}
      </Flex>
      <Flex
        direction="column"
        gap="4"
      >
        <ThreadItem />
        <ThreadItem />
      </Flex>
    </Flex>
  );
}
