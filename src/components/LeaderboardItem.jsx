import { Avatar, Flex, Text } from "@chakra-ui/react"

export default function LeaderboardItem() {
  return (
    <Flex
        w="100%"
        justify="space-between"
        align="center"
      >
        <Flex
          gap="4"
          align="center"
        >
          <Text
            as="b"
            fontSize="lg"
          >
            1
          </Text>
          <Flex
            gap="4"
            align="center"
          >
            <Avatar
              name="Clarila Wahyu"
              rounded="sm"
            />
            <Text
              fontSize="lg"
              noOfLines="1"
            >
              Clarila Wahyu Maylenna
            </Text>
          </Flex>
        </Flex>
        <Text fontSize="lg">250</Text>
      </Flex>
  )
}