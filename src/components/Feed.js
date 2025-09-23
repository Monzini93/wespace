import { useState } from 'react';
import { Button, Box, VStack } from '@chakra-ui/react';
import { ChatWindow } from './chat';
import Post from './Post';
import CreatePost from './CreatePost';

// Dados falsos para a apresentação
const DUMMY_POSTS = [
  {
    id: 1,
    author: 'Ana Clara',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    content: 'Que dia lindo para um passeio no parque! ☀️🌳 #natureza #bemestar',
    imageUrl: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    likes: 134,
    comments: 23,
  },
  {
    id: 2,
    author: 'Bruno Costa',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    content: 'Finalmente terminei meu projeto pessoal. Foram meses de trabalho, mas o resultado valeu a pena! 💻🚀 #dev #react',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    likes: 320,
    comments: 56,
  },
  {
    id: 3,
    author: 'Carla Dias',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704a',
    content: 'Experimentando uma receita nova hoje! Bolo de cenoura com cobertura de chocolate. 😋',
    imageUrl: null,
    likes: 98,
    comments: 15,
  },
];

const Feed = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Box position="relative" minH="100vh">
      {/* Overlay quando chat aberto */}
      {isChatOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          bg="blackAlpha.600"
          zIndex={999}
          onClick={() => setIsChatOpen(false)}
        />
      )}

      {/* Conteúdo principal do Feed */}
      <Box opacity={isChatOpen ? 0.3 : 1} transition="opacity 0.2s">
        <VStack spacing={6} p={4}>
          <CreatePost />
          {DUMMY_POSTS.map((post) => (
            <Post key={post.id} postData={post} />
          ))}
        </VStack>

        {/* Botão flutuante para abrir chat */}
        <Button 
          colorScheme="purple" 
          onClick={() => setIsChatOpen(true)}
          position="fixed"
          bottom="4"
          right="4"
          zIndex={800}
          size="lg"
          borderRadius="full"
          boxShadow="lg"
        >
          💬 Chat
        </Button>
      </Box>

      {/* Janela do Chat */}
      <ChatWindow
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </Box>
  );
};

export default Feed;