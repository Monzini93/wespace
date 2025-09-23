import { Box, Flex, VStack } from '@chakra-ui/react';
import Post from './Post';
import CreatePost from './CreatePost';
import ContactList from './ContactsList';

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

const Feed = ({ onContactClick }) => {
  return (
    <Flex gap={8} align="start" p={4}>
      {/* Coluna principal do feed */}
      <Box flex="3">
        <VStack spacing={6}>
          <CreatePost />
          {DUMMY_POSTS.map((post) => (
            <Post key={post.id} postData={post} />
          ))}
        </VStack>
      </Box>

      {/* Barra lateral com contatos */}
      <Box
        flex="1"
        display={{ base: 'none', lg: 'block' }}
        position="sticky"
        top="100px"
      >
        <ContactList onContactClick={onContactClick} />
      </Box>
    </Flex>
  );
};

export default Feed;
