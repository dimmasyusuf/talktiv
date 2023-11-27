import { Flex, useBreakpointValue } from '@chakra-ui/react';
import CreateThread from './CreateThread';
import TagModal from './TagModal';

export default function ThreadList() {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex w="100%">
      <Flex
        w="100%"
        gap="4"
      >
        <CreateThread />
        {isSmallScreen && <TagModal />}
      </Flex>
    </Flex>
  );
}
