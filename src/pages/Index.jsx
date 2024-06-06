import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();
  const { session, logout } = useSupabaseAuth();

  const handleAuthAction = () => {
    if (session) {
      logout();
    } else {
      navigate("/login");
    }
  };
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" w="100%" p={4} bg={useColorModeValue("gray.100", "gray.900")} alignItems="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Spacer />
        <Button onClick={handleAuthAction}>
          {session ? "Logout" : "Login"}
        </Button>
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