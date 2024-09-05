import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box display="flex" flexDirection="column" minHeight="100vh" bg="gray.300">
    <Center my="auto">{children}</Center>
  </Box>
);

export default function Home() {
  return (
    <Layout>
      <Text fontSize="xl">Hello, world!</Text>
    </Layout>
  );
}
