import { Box, Avatar, Textarea, Button, HStack, Icon, Divider } from '@chakra-ui/react';
import { FaImage, FaVideo, FaChartBar } from 'react-icons/fa';

const CreatePost = () => {
  return (
    <Box bg="white" p={4} borderRadius="lg" boxShadow="sm" w="100%">
      <HStack spacing={4} align="start">
        <Avatar name="Usuário Demo" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Textarea
          placeholder="No que você está pensando?"
          border="none"
          focusBorderColor="transparent"
          resize="none"
          _placeholder={{ color: 'gray.500' }}
        />
      </HStack>
      <Divider my={3} />
      <HStack justify="space-between">
        <HStack spacing={5}>
          <Icon as={FaImage} color="green.500" w={5} h={5} cursor="pointer" />
          <Icon as={FaVideo} color="red.500" w={5} h={5} cursor="pointer" />
          <Icon as={FaChartBar} color="orange.500" w={5} h={5} cursor="pointer" />
        </HStack>
        <Button colorScheme="purple" size="sm" borderRadius="full">
          Publicar
        </Button>
      </HStack>
    </Box>
  );
};

export default CreatePost;