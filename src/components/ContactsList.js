import { useState } from 'react';
import {
  Box, VStack, HStack, Text, Avatar, Input,
  Badge, Flex, useColorModeValue
} from '@chakra-ui/react';

// Dados dos contatos (usando os nomes que você forneceu)
const CONTACTS_DATA = [
  {
    id: 1,
    name: 'Monique Gonsaga',
    role: 'Gerente de RH',
    status: 'online',
    lastSeen: 'Agora',
    avatar: 'https://i.pravatar.cc/150?u=monique'
  },
  {
    id: 2,
    name: 'Keren Vignon',
    role: 'Analista de Marketing Tocailvros & Tocacast',
    status: 'online',
    lastSeen: '13:52',
    avatar: 'https://i.pravatar.cc/150?u=keren'
  },
  {
    id: 3,
    name: 'Luana Spanguero',
    role: 'Colaboradora',
    status: 'offline',
    lastSeen: '19 de Set',
    avatar: 'https://i.pravatar.cc/150?u=luana'
  },
  {
    id: 4,
    name: 'Beatriz Lara',
    role: 'Head of Marketing',
    status: 'online',
    lastSeen: '19 de Set',
    avatar: 'https://i.pravatar.cc/150?u=beatriz'
  },
  {
    id: 5,
    name: 'Marcia Azevedo',
    role: 'Gerente Financeiro',
    status: 'offline',
    lastSeen: '17 de Set',
    avatar: 'https://i.pravatar.cc/150?u=marcia'
  },
  {
    id: 6,
    name: 'Nicoly',
    role: 'Auxiliar de RH',
    status: 'online',
    lastSeen: '12 de Set',
    avatar: 'https://i.pravatar.cc/150?u=nicoly'
  }
];

const ContactList = ({ onContactClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const bgColor = useColorModeValue('white', 'gray.800');
  
  const filteredContacts = CONTACTS_DATA.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onlineContacts = filteredContacts.filter(contact => contact.status === 'online');
  const offlineContacts = filteredContacts.filter(contact => contact.status === 'offline');

  return (
    <Box 
      w="100%" 
      bg={bgColor} 
      borderRadius="lg"
      p={4}
      boxShadow="md"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Contatos da Empresa
      </Text>
      
      <Input
        placeholder="Buscar contatos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        borderRadius="full"
        mb={4}
      />

      <VStack spacing={2} align="stretch">
        {/* Contatos Online */}
        {onlineContacts.length > 0 && (
          <>
            <Text fontSize="sm" fontWeight="medium" color="green.600" px={2}>
              ONLINE • {onlineContacts.length}
            </Text>
            {onlineContacts.map(contact => (
              <ContactItem 
                key={contact.id} 
                contact={contact} 
                onClick={() => onContactClick(contact)}
              />
            ))}
          </>
        )}

        {/* Contatos Offline */}
        {offlineContacts.length > 0 && (
          <>
            <Text fontSize="sm" fontWeight="medium" color="gray.600" px={2} mt={4}>
              OFFLINE • {offlineContacts.length}
            </Text>
            {offlineContacts.map(contact => (
              <ContactItem 
                key={contact.id} 
                contact={contact} 
                onClick={() => onContactClick(contact)}
              />
            ))}
          </>
        )}
      </VStack>
    </Box>
  );
};

// Componente individual do contato
const ContactItem = ({ contact, onClick }) => {
  return (
    <Flex
      p={3}
      borderRadius="md"
      _hover={{ bg: 'gray.50', cursor: 'pointer' }}
      onClick={onClick}
      align="center"
      gap={3}
    >
      <Avatar 
        size="sm" 
        name={contact.name} 
        src={contact.avatar}
        border={contact.status === 'online' ? '2px solid' : 'none'}
        borderColor="green.500"
      />
      <Box flex={1}>
        <Text fontWeight="medium" fontSize="sm">{contact.name}</Text>
        <Text fontSize="xs" color="gray.600" noOfLines={1}>
          {contact.role}
        </Text>
      </Box>
      <VStack spacing={0} align="flex-end">
        <Badge 
          colorScheme={contact.status === 'online' ? 'green' : 'gray'} 
          size="xs"
        >
          {contact.status}
        </Badge>
        <Text fontSize="xs" color="gray.500">
          {contact.lastSeen}
        </Text>
      </VStack>
    </Flex>
  );
};

export default ContactList;