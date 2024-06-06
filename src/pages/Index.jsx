import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" w="100%" p={4} bg={useColorModeValue("gray.100", "gray.900")} alignItems="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <IconButton
          aria-label="Toggle color mode"
          icon={colorModeIcon}
          onClick={toggleColorMode}
        />
      </Flex>
      <Flex direction="column" align="center" justify="center" height="calc(100vh - 64px)">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;