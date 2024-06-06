import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Flex, Box } from "@chakra-ui/react";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" height="100vh">
        <Box width="400px">
          <SupabaseAuthUI />
        </Box>
      </Flex>
    </Container>
  );
};

export default Login;