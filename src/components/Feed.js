import { VStack } from '@chakra-ui/react';
import Post from './Post';
import CreatePost from './CreatePost';

// Dados falsos para a apresentação
const DUMMY_POSTS = [
  {
    id: 1,
    author: 'Ana Clara',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    content: 'Que dia lindo para um passeio no parque! ☀️🌳 #natureza #bemestar',
    imageUrl: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80',
    likes: 134,
    comments: 23,
  },
  {
    id: 2,
    author: 'Bruno Costa',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    content: 'Finalmente terminei meu projeto pessoal. Foram meses de trabalho, mas o resultado valeu a pena! 💻🚀 #dev #react',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
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
  return (
    <VStack spacing={6}>
      <CreatePost />
      {DUMMY_POSTS.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
    </VStack>
  );
};

export default Feed;