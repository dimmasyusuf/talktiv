import { Flex, Image } from '@chakra-ui/react';

export default function Logo() {
  return (
    <Flex>
      <Image
        src="./talktiv.png"
        alt="talktiv logo"
        w="48px"
        h="48px"
      />
    </Flex>
  );
}
