import { useState, useRef, useEffect } from 'react';
import {
  Box, VStack, HStack, Text, Avatar, Input,
  IconButton, Flex, Badge, InputGroup, InputRightElement,
  useColorModeValue
} from '@chakra-ui/react';
import { ArrowBackIcon, AttachmentIcon, PhoneIcon, VideoIcon } from '@chakra-ui/icons';
import { FiSend, FiSmile } from 'react-icons/fi';

const mockConversation = {
  contact: {
    id: 1,
    name: 'Monique Gonçalves',
    role: 'Gerente de RH',
    department: 'Recursos Humanos',
    status: 'online',
    avatar: 'https://i.pravatar.cc/150?u=monique'
  },
  messages: [
    {
      id: 1,
      sender: 'monique',
      text: 'Olá! Vi que você finalizou o relatório trimestral. Podemos marcar uma reunião para discutir os resultados?',
      time: '10:30',
      date: 'Hoje'
    },
    {
      id: 2,
      sender: 'user',
      text: 'Bom dia, Monique! Claro, estou com a agenda livre na quarta-feira pela manhã. Que tal 9h?',
      time: '10:32',
      date: 'Hoje'
    },
    {
      id: 3,
      sender: 'monique',
      text: 'Perfeito! 9h da quarta-feira funciona bem. Vou enviar o convite pela agenda.',
      time: '10:33',
      date: 'Hoje'
    }
  ]
};

const ChatWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState(mockConversation.messages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'user',
      text: newMessage,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      date: 'Agora'
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      w="90vw"
      h="85vh"
      maxW="1200px"
      bg={bgColor}
      borderRadius="xl"
      boxShadow="2xl"
      zIndex={1000}
      border="1px solid"
      borderColor={borderColor}
    >
      <Flex
        p={4}
        borderBottom="1px solid"
        borderColor={borderColor}
        align="center"
        justify="space-between"
        bg="purple.50"
        borderTopRadius="xl"
      >
        <HStack spacing={3}>
          <IconButton
            icon={<ArrowBackIcon />}
            variant="ghost"
            onClick={onClose}
            aria-label="Voltar"
          />
          <Avatar
            size="md"
            name={mockConversation.contact.name}
            src={mockConversation.contact.avatar}
          />
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {mockConversation.contact.name}
            </Text>
            <HStack spacing={2}>
              <Badge colorScheme="green" size="sm">
                {mockConversation.contact.status}
              </Badge>
              <Text fontSize="sm" color="gray.600">
                {mockConversation.contact.role}
              </Text>
            </HStack>
          </Box>
        </HStack>

        <HStack>
          <IconButton
            icon={<PhoneIcon />}
            variant="ghost"
            colorScheme="purple"
            aria-label="Chamada de voz"
          />
          <IconButton
            icon={<VideoIcon />}
            variant="ghost"
            colorScheme="purple"
            aria-label="Videochamada"
          />
        </HStack>
      </Flex>

      <Box h="calc(100% - 140px)" overflowY="auto" p={4}>
        <VStack spacing={4} align="stretch">
          {messages.map((message) => (
            <Flex
              key={message.id}
              justify={message.sender === 'user' ? 'flex-end' : 'flex-start'}
            >
              <Box
                maxW="70%"
                bg={message.sender === 'user' ? 'purple.500' : 'gray.100'}
                color={message.sender === 'user' ? 'white' : 'gray.800'}
                px={4}
                py={2}
                borderRadius="xl"
                borderBottomLeftRadius={message.sender === 'user' ? 'xl' : '4px'}
                borderBottomRightRadius={message.sender === 'user' ? '4px' : 'xl'}
              >
                <Text>{message.text}</Text>
                <Text
                  fontSize="xs"
                  color={message.sender === 'user' ? 'purple.100' : 'gray.500'}
                  textAlign="right"
                  mt={1}
                >
                  {message.time}
                </Text>
              </Box>
            </Flex>
          ))}
          <div ref={messagesEndRef} />
        </VStack>
      </Box>

      <Box p={4} borderTop="1px solid" borderColor={borderColor}>
        <HStack spacing={2}>
          <IconButton
            icon={<AttachmentIcon />}
            variant="ghost"
            aria-label="Anexar arquivo"
          />
          <InputGroup>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
              borderRadius="full"
              pr="70px"
            />
            <InputRightElement width="70px">
              <HStack spacing={1}>
                <IconButton
                  icon={<FiSmile />}
                  variant="ghost"
                  size="sm"
                  aria-label="Emoji"
                />
                <IconButton
                  icon={<FiSend />}
                  colorScheme="purple"
                  size="sm"
                  onClick={handleSendMessage}
                  aria-label="Enviar mensagem"
                />
              </HStack>
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Box>
    </Box>
  );
};

export default ChatWindow;