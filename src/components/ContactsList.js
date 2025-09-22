import { Box, VStack, HStack, Avatar, Text, Badge, Flex } from '@chakra-ui/react';

const ContactsList = () => {
  // Dados de exemplo dos contatos
  const contacts = [
    { name: "Lucas", role: "Desenvolvedor", status: "online", lastSeen: "2 min" },
    { name: "Fernanda", role: "Designer", status: "online", lastSeen: "5 min" },
    { name: "Carlos", role: "Gerente", status: "offline", lastSeen: "1 h" },
    { name: "Monique Gonsaga", role: "RH", status: "online", lastSeen: "Agora" },
    { name: "Keren Vignon", role: "Aniversariante", status: "online", lastSeen: "13:52" },
    { name: "Luana Spanguero", role: "Colaboradora", status: "offline", lastSeen: "19 de Set" },
    { name: "Beatriz Iara", role: "Colaboradora", status: "online", lastSeen: "19 de Set" },
    { name: "Marcia Azevedo", role: "Colaboradora", status: "offline", lastSeen: "17 de Set" },
    { name: "Nicoly", role: "Colaboradora", status: "online", lastSeen: "12 de Set" },
    { name: "Regiane Silva", role: "Colaboradora", status: "online", lastSeen: "12 de Set" }
  ];

  return (
    <Box bg="white" borderRadius="lg" boxShadow="sm" p={4} w="100%">
      <Text fontWeight="bold" fontSize="lg" mb={4} color="gray.700">
        👥 Contatos da Empresa
      </Text>
      
      <VStack spacing={3} align="stretch" maxH="400px" overflowY="auto">
        {contacts.map((contact, index) => (
          <HStack 
            key={index} 
            p={2} 
            borderRadius="md" 
            _hover={{ bg: "gray.50" }}
            cursor="pointer"
            spacing={3}
          >
            <Avatar 
              name={contact.name} 
              size="sm" 
              src={`https://i.pravatar.cc/150?u=${contact.name}`}
            />
            
            <Flex direction="column" flex={1}>
              <Text fontWeight="medium" fontSize="sm">
                {contact.name}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {contact.role}
              </Text>
            </Flex>
            
            <Flex direction="column" align="flex-end">
              <Badge 
                colorScheme={contact.status === "online" ? "green" : "gray"} 
                fontSize="xs"
              >
                {contact.status === "online" ? "● Online" : "○ Offline"}
              </Badge>
              <Text fontSize="xs" color="gray.400" mt={1}>
                {contact.lastSeen}
              </Text>
            </Flex>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default ContactsList;