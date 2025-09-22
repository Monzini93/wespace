import { Box, Flex, Avatar, Text, Image, HStack, Icon, Divider, Spacer } from '@chakra-ui/react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa6';

const Post = ({ postData }) => {
  const { author, avatarUrl, content, imageUrl, likes, comments } = postData;

  return (
    <Box bg="white" borderRadius="lg" boxShadow="sm" w="100%" overflow="hidden">
      <Flex p={4} alignItems="center">
        <Avatar name={author} src={avatarUrl} />
        <Text fontWeight="bold" ml={3}>
          {author}
        </Text>
      </Flex>

      <Box px={4} pb={2}>
        <Text>{content}</Text>
      </Box>

      {imageUrl && (
        <Box p={2}>
          <Image 
            src={imageUrl} 
            alt="Imagem do post" 
            w="100%" 
            h="550px" 
            objectFit="cover" 
            borderRadius="md"
            border="1px solid" 
            borderColor="gray.100" // Borda sutil cinza claro
          />
        </Box>
      )}

      <Flex p={2} px={4} align="center">
        <HStack spacing={1}>
          <Icon as={FaThumbsUp} color="blue.500" />
          <Text fontSize="sm" color="gray.600">{likes}</Text>
        </HStack>
        <Spacer />
        <Text fontSize="sm" color="gray.600">{comments} comentários</Text>
      </Flex>

      <Divider />

      <Flex justify="space-around" p={1}>
        <HStack as="button" p={2} borderRadius="md" _hover={{ bg: 'gray.100' }} w="100%" justify="center">
          <Icon as={FaThumbsUp} color="gray.500" />
          <Text fontSize="sm" fontWeight="bold" color="gray.600">Curtir</Text>
        </HStack>
        <HStack as="button" p={2} borderRadius="md" _hover={{ bg: 'gray.100' }} w="100%" justify="center">
          <Icon as={FaComment} color="gray.500" />
          <Text fontSize="sm" fontWeight="bold" color="gray.600">Comentar</Text>
        </HStack>
        <HStack as="button" p={2} borderRadius="md" _hover={{ bg: 'gray.100' }} w="100%" justify="center">
          <Icon as={FaShare} color="gray.500" />
          <Text fontSize="sm" fontWeight="bold" color="gray.600">Compartilhar</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Post;