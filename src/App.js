import { useState } from 'react';
import { Box, Flex, Container, VStack, Text, Avatar, Badge, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import Profile from './components/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('feed');

  // Dados mockados
  const mockPosts = [
    {
      author: 'Maria Silva',
      avatarUrl: 'https://i.pravatar.cc/150?u=1',
      content: 'Primeiro post de teste na nossa rede!',
      imageUrl: 'https://i.pinimg.com/1200x/81/3d/c7/813dc78a3416bcfef972373f24b7004a.jpg',
      likes: 120,
      comments: 34,
    },
    {
      author: 'João Santos',
      avatarUrl: 'https://i.pravatar.cc/150?u=2',
      content: 'Curtindo bastante esse projeto 🚀',
      imageUrl: 'https://i.pinimg.com/736x/e9/ea/9c/e9ea9c33d5f6befa28ad417b4de9147f.jpg',
      likes: 78,
      comments: 12,
    },
    {
      author: 'Ana Costa',
      avatarUrl: 'https://i.pravatar.cc/150?u=3',
      content: 'Olha só esse visual! 😍',
      imageUrl: 'https://i.pinimg.com/1200x/78/e7/65/78e7654475d0621664b9564d7cb4f43c.jpg',
      likes: 210,
      comments: 45,
    },
  ];

  const contacts = [
    { name: "Monique Gonsaga", role: "RH", status: "online", lastSeen: "Agora" },
    { name: "Keren Vignon", role: "Aniversariante", status: "online", lastSeen: "13:52" },
    { name: "Luana Spanguero", role: "Colaboradora", status: "offline", lastSeen: "19 de Set" },
    { name: "Beatriz Iara", role: "Colaboradora", status: "online", lastSeen: "19 de Set" },
    { name: "Marcia Azevedo", role: "Colaboradora", status: "offline", lastSeen: "17 de Set" },
    { name: "Nicoly", role: "Colaboradora", status: "online", lastSeen: "12 de Set" },
    { name: "Regiane Silva", role: "Colaboradora", status: "online", lastSeen: "12 de Set" },
    { name: "Lucas", role: "Desenvolvedor", status: "online", lastSeen: "2 min" },
    { name: "Fernanda", role: "Designer", status: "online", lastSeen: "5 min" },
    { name: "Carlos", role: "Gerente", status: "offline", lastSeen: "1 h" }
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('feed');
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  // Se não estiver logado, mostra a tela de login
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  // Função renderContent
  const renderContent = () => {
    switch (currentView) {
      case 'admin':
        return <AdminPanel />;
      
      case 'profile':
        return <Profile />;
      
      case 'feed':
      default:
        return (
          <Container maxW="7xl" py={6}>
            <Flex gap={8} align="start">
              {/* Feed principal */}
              <Box flex="3">
                <VStack spacing={6}>
                  <CreatePost />
                  {mockPosts.map((post, index) => (
                    <Post key={index} postData={post} />
                  ))}
                </VStack>
              </Box>

              {/* Barra lateral direita - Lista de contatos FIXA */}
              <Box 
                flex="1" 
                display={{ base: 'none', lg: 'block' }}
                position="sticky"
                top="100px"
              >
                <Box 
                  bg="white" 
                  borderRadius="lg" 
                  boxShadow="sm" 
                  p={4} 
                  w="100%"
                  maxH="calc(100vh - 140px)"
                  overflowY="auto"
                >
                  <Text fontWeight="bold" fontSize="lg" mb={4} color="gray.700">
                    👥 Contatos da Empresa
                  </Text>
                  
                  <InputGroup mb={4}>
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input placeholder="Buscar contatos..." fontSize="sm" />
                  </InputGroup>
                  
                  <VStack spacing={3} align="stretch">
                    {contacts.map((contact, index) => (
                      <Box 
                        key={index} 
                        p={2} 
                        borderRadius="md" 
                        _hover={{ bg: "gray.50" }}
                        cursor="pointer"
                      >
                        <Flex align="center" justify="space-between">
                          <Flex align="center">
                            <Avatar 
                              name={contact.name} 
                              size="sm" 
                              src={`https://i.pravatar.cc/150?u=${contact.name}`}
                              mr={3}
                            />
                            <Box>
                              <Text fontWeight="medium" fontSize="sm">
                                {contact.name}
                              </Text>
                              <Text fontSize="xs" color="gray.500">
                                {contact.role}
                              </Text>
                            </Box>
                          </Flex>
                          <Box textAlign="right">
                            <Badge 
                              colorScheme={contact.status === "online" ? "green" : "gray"} 
                              fontSize="xs"
                            >
                              {contact.status === "online" ? "● Online" : "○ Offline"}
                            </Badge>
                            <Text fontSize="xs" color="gray.400" mt={1}>
                              {contact.lastSeen}
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    ))}
                  </VStack>
                </Box>
              </Box>
            </Flex>
          </Container>
        );
    }
  };

  return (
    <Box bg="gray.100" minH="100vh">
      <Navbar 
        onViewChange={handleViewChange}
        onLogout={handleLogout}
      />
      {renderContent()}
    </Box>
  );
}

export default App;