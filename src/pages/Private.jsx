import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Flex, Box, Text } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Private = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  if (!session) {
    return null; // or a loading spinner
  }

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" height="100vh">
        <Box textAlign="center">
          <Text fontSize="2xl">Welcome to the private page</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Private;