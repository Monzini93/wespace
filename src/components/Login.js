import { Box, Flex, VStack, Heading, Text, Input, Button, Image, FormControl, FormLabel } from '@chakra-ui/react';

const Login = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula um login bem-sucedido
    onLogin();
  };

  return (
    <Flex minH="100vh" bg="gray.50" align="center" justify="center">
      <Box bg="white" borderRadius="2xl" boxShadow="xl" p={8} maxW="md" w="full">
        <VStack spacing={6}>
          {/* Logo */}
          <Box textAlign="center">
            <Heading size="xl" color="purple.600" mb={2}>
              Wespace
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Sua rede social corporativa
            </Text>
          </Box>

          {/* Imagem ilustrativa */}
          <Box>
            <Image 
              src="https://i.pinimg.com/736x/a7/d0/98/a7d098242a5f5e940e134529fbec5e4d.jpg" 
              alt="Trabalho em equipe"
              borderRadius="lg"
              w="300px"
              h="200px"
              objectFit="cover"
            />
          </Box>

          {/* Formulário de Login */}
          <Box w="full">
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel color="gray.700">E-mail corporativo</FormLabel>
                  <Input 
                    type="email" 
                    placeholder="seu.email@empresa.com" 
                    size="lg"
                    borderRadius="lg"
                    borderColor="gray.300"
                    _focus={{ borderColor: "purple.500", boxShadow: "0 0 0 1px purple.500" }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color="gray.700">Senha</FormLabel>
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    size="lg"
                    borderRadius="lg"
                    borderColor="gray.300"
                    _focus={{ borderColor: "purple.500", boxShadow: "0 0 0 1px purple.500" }}
                  />
                </FormControl>

                <Button 
                  type="submit" 
                  colorScheme="purple" 
                  size="lg" 
                  w="full" 
                  borderRadius="lg"
                  mt={4}
                >
                  Entrar na Wespace
                </Button>
              </VStack>
            </form>
          </Box>

          {/* Mensagem de demonstração */}
          <Box textAlign="center" mt={4}>
            <Text fontSize="sm" color="gray.500">
              💡 Demonstração: Clique em "Entrar" para acessar o protótipo
            </Text>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Login;