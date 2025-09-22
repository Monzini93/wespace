import { Box, VStack, HStack, Heading, Text, Input, Button, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton, useToast, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { EmailIcon, DeleteIcon, CopyIcon } from '@chakra-ui/icons';

const AdminPanel = () => {
  const toast = useToast();

  // Dados mockados de convites (apenas para demonstração)
  const [invites, setInvites] = useState([
    { id: 1, email: 'maria.silva@empresa.com', status: 'Enviado', date: '2024-01-15' },
    { id: 2, email: 'joao.santos@empresa.com', status: 'Pendente', date: '2024-01-16' },
    { id: 3, email: 'ana.costa@empresa.com', status: 'Aceito', date: '2024-01-14' }
  ]);

  const [newEmail, setNewEmail] = useState('');

  const handleSendInvite = () => {
    if (!newEmail) {
      toast({
        title: "Campo vazio",
        description: "Por favor, digite um e-mail",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simula envio do convite
    const newInvite = {
      id: invites.length + 1,
      email: newEmail,
      status: 'Enviado',
      date: new Date().toISOString().split('T')[0]
    };

    setInvites([newInvite, ...invites]);
    setNewEmail('');

    toast({
      title: "Convite enviado!",
      description: `Convite enviado para ${newEmail}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleCopyLink = () => {
    const inviteLink = "https://wespace.empresa.com/convite";
    navigator.clipboard.writeText(inviteLink);
    
    toast({
      title: "Link copiado!",
      description: "Link de convite copiado para a área de transferência",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDeleteInvite = (id) => {
    setInvites(invites.filter(invite => invite.id !== id));
    
    toast({
      title: "Convite removido",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Aceito': return 'green';
      case 'Enviado': return 'blue';
      case 'Pendente': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <Box p={8} maxW="6xl" mx="auto">
      <VStack spacing={8} align="stretch">
        
        {/* Cabeçalho */}
        <Box>
          <Heading size="xl" color="purple.600" mb={2}>
            🛠️ Painel Administrativo
          </Heading>
          <Text color="gray.600" fontSize="lg">
            Gerencie convites e acessos da Wespace
          </Text>
        </Box>

        {/* Card de Envio Rápido */}
        <Card>
          <CardHeader>
            <Heading size="md">📩 Enviar Convite Individual</Heading>
          </CardHeader>
          <CardBody>
            <VStack spacing={4}>
              <Text>Digite o e-mail do colaborador para enviar um convite:</Text>
              <HStack w="full">
                <Input
                  placeholder="nome.sobrenome@empresa.com"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  size="lg"
                />
                <Button 
                  colorScheme="purple" 
                  leftIcon={<EmailIcon />}
                  onClick={handleSendInvite}
                  size="lg"
                >
                  Enviar Convite
                </Button>
              </HStack>
            </VStack>
          </CardBody>
        </Card>

        {/* Card de Link Geral */}
        <Card>
          <CardHeader>
            <Heading size="md">🔗 Link de Convite Geral</Heading>
          </CardHeader>
          <CardBody>
            <VStack spacing={4}>
              <Text>Compartilhe este link para que novos colaboradores possam se cadastrar:</Text>
              <HStack w="full" bg="gray.50" p={3} borderRadius="md">
                <Text flex={1} fontFamily="mono" fontSize="sm">
                  https://wespace.empresa.com/convite
                </Text>
                <IconButton
                  icon={<CopyIcon />}
                  colorScheme="blue"
                  onClick={handleCopyLink}
                  aria-label="Copiar link"
                />
              </HStack>
            </VStack>
          </CardBody>
        </Card>

        {/* Lista de Convites */}
        <Card>
          <CardHeader>
            <Heading size="md">📋 Convites Enviados</Heading>
          </CardHeader>
          <CardBody>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>E-mail</Th>
                  <Th>Status</Th>
                  <Th>Data</Th>
                  <Th>Ações</Th>
                </Tr>
              </Thead>
              <Tbody>
                {invites.map((invite) => (
                  <Tr key={invite.id}>
                    <Td>{invite.email}</Td>
                    <Td>
                      <Badge colorScheme={getStatusColor(invite.status)}>
                        {invite.status}
                      </Badge>
                    </Td>
                    <Td>{invite.date}</Td>
                    <Td>
                      <IconButton
                        icon={<DeleteIcon />}
                        colorScheme="red"
                        size="sm"
                        onClick={() => handleDeleteInvite(invite.id)}
                        aria-label="Excluir convite"
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        {/* Estatísticas Rápidas */}
        <HStack spacing={4} justify="center">
          <Box textAlign="center" p={4} bg="blue.50" borderRadius="lg" minW="120px">
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              {invites.length}
            </Text>
            <Text fontSize="sm" color="blue.600">Total</Text>
          </Box>
          <Box textAlign="center" p={4} bg="green.50" borderRadius="lg" minW="120px">
            <Text fontSize="2xl" fontWeight="bold" color="green.600">
              {invites.filter(i => i.status === 'Aceito').length}
            </Text>
            <Text fontSize="sm" color="green.600">Aceitos</Text>
          </Box>
          <Box textAlign="center" p={4} bg="orange.50" borderRadius="lg" minW="120px">
            <Text fontSize="2xl" fontWeight="bold" color="orange.600">
              {invites.filter(i => i.status === 'Pendente').length}
            </Text>
            <Text fontSize="sm" color="orange.600">Pendentes</Text>
          </Box>
        </HStack>

      </VStack>
    </Box>
  );
};

export default AdminPanel;