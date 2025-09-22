import { useState } from 'react';
import { 
  Box, VStack, HStack, Heading, Text, Avatar, Button, Input, 
  FormControl, FormLabel, Textarea, Badge, Card, CardHeader, 
  CardBody, Flex, IconButton, useToast, Divider, Grid, GridItem 
} from '@chakra-ui/react';
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { FaCamera } from 'react-icons/fa';

const Profile = () => {
  const toast = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  // Dados do usuário (mockados)
  const [userData, setUserData] = useState({
    name: 'Administrador',
    email: 'admin@empresa.com',
    role: 'Administrador do Sistema',
    department: 'TI',
    bio: 'Responsável pela gestão da plataforma Wespace e integração da equipe.',
    phone: '(11) 99999-9999',
    location: 'São Paulo, SP',
    joinDate: '15/01/2024'
  });

  const [editedData, setEditedData] = useState({ ...userData });

  const handleEdit = () => {
    setEditedData({ ...userData });
    setIsEditing(true);
  };

  const handleSave = () => {
    setUserData({ ...editedData });
    setIsEditing(false);
    toast({
      title: "Perfil atualizado!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleCancel = () => {
    setEditedData({ ...userData });
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditedData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Box p={8} maxW="6xl" mx="auto">
      <VStack spacing={8} align="stretch">
        
        {/* Cabeçalho */}
        <Box textAlign="center">
          <Heading size="xl" color="purple.600" mb={2}>
            👤 Meu Perfil
          </Heading>
          <Text color="gray.600" fontSize="lg">
            Gerencie suas informações pessoais
          </Text>
        </Box>

        {/* Card de Informações Pessoais */}
        <Card>
          <CardHeader>
            <Flex justify="space-between" align="center">
              <Heading size="md">📋 Informações Pessoais</Heading>
              {!isEditing ? (
                <Button leftIcon={<EditIcon />} colorScheme="purple" onClick={handleEdit}>
                  Editar Perfil
                </Button>
              ) : (
                <HStack>
                  <IconButton icon={<CheckIcon />} colorScheme="green" onClick={handleSave} aria-label="Salvar" />
                  <IconButton icon={<CloseIcon />} colorScheme="red" onClick={handleCancel} aria-label="Cancelar" />
                </HStack>
              )}
            </Flex>
          </CardHeader>
          <CardBody>
            <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={6}>
              
              {/* Avatar e Info Básica */}
              <GridItem>
                <VStack spacing={4}>
                  <Box position="relative">
                    <Avatar 
                      size="2xl" 
                      name={userData.name} 
                      src="https://i.pravatar.cc/150?u=admin" 
                      border="4px solid"
                      borderColor="purple.500"
                    />
                    <IconButton
                      icon={<FaCamera />}
                      size="sm"
                      position="absolute"
                      bottom={2}
                      right={2}
                      borderRadius="full"
                      colorScheme="purple"
                      aria-label="Alterar foto"
                    />
                  </Box>
                  
                  <VStack spacing={1}>
                    <Badge colorScheme="purple" fontSize="lg">
                      {userData.role}
                    </Badge>
                    <Text fontSize="sm" color="gray.500">
                      Membro desde: {userData.joinDate}
                    </Text>
                  </VStack>
                </VStack>
              </GridItem>

              {/* Formulário de Edição */}
              <GridItem>
                <VStack spacing={4}>
                  <FormControl>
                    <FormLabel>Nome Completo</FormLabel>
                    {isEditing ? (
                      <Input 
                        value={editedData.name} 
                        onChange={(e) => handleChange('name', e.target.value)}
                      />
                    ) : (
                      <Text fontSize="lg" fontWeight="medium">{userData.name}</Text>
                    )}
                  </FormControl>

                  <FormControl>
                    <FormLabel>E-mail</FormLabel>
                    {isEditing ? (
                      <Input 
                        type="email"
                        value={editedData.email} 
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    ) : (
                      <Text fontSize="lg">{userData.email}</Text>
                    )}
                  </FormControl>

                  <HStack spacing={4} w="full">
                    <FormControl flex={1}>
                      <FormLabel>Cargo</FormLabel>
                      {isEditing ? (
                        <Input 
                          value={editedData.role} 
                          onChange={(e) => handleChange('role', e.target.value)}
                        />
                      ) : (
                        <Text>{userData.role}</Text>
                      )}
                    </FormControl>

                    <FormControl flex={1}>
                      <FormLabel>Departamento</FormLabel>
                      {isEditing ? (
                        <Input 
                          value={editedData.department} 
                          onChange={(e) => handleChange('department', e.target.value)}
                        />
                      ) : (
                        <Text>{userData.department}</Text>
                      )}
                    </FormControl>
                  </HStack>

                  <FormControl>
                    <FormLabel>Biografia</FormLabel>
                    {isEditing ? (
                      <Textarea 
                        value={editedData.bio} 
                        onChange={(e) => handleChange('bio', e.target.value)}
                        rows={3}
                      />
                    ) : (
                      <Text color="gray.600">{userData.bio}</Text>
                    )}
                  </FormControl>

                  <HStack spacing={4} w="full">
                    <FormControl flex={1}>
                      <FormLabel>Telefone</FormLabel>
                      {isEditing ? (
                        <Input 
                          value={editedData.phone} 
                          onChange={(e) => handleChange('phone', e.target.value)}
                        />
                      ) : (
                        <Text>{userData.phone}</Text>
                      )}
                    </FormControl>

                    <FormControl flex={1}>
                      <FormLabel>Localização</FormLabel>
                      {isEditing ? (
                        <Input 
                          value={editedData.location} 
                          onChange={(e) => handleChange('location', e.target.value)}
                        />
                      ) : (
                        <Text>{userData.location}</Text>
                      )}
                    </FormControl>
                  </HStack>
                </VStack>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>

        <Divider />

        {/* Estatísticas */}
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
          <Card bg="blue.50">
            <CardBody textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" color="blue.600">24</Text>
              <Text color="blue.600">Posts Publicados</Text>
            </CardBody>
          </Card>

          <Card bg="green.50">
            <CardBody textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" color="green.600">156</Text>
              <Text color="green.600">Conexões</Text>
            </CardBody>
          </Card>

          <Card bg="purple.50">
            <CardBody textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" color="purple.600">12</Text>
              <Text color="purple.600">Meses na Empresa</Text>
            </CardBody>
          </Card>
        </Grid>

        {/* Últimas Atividades */}
        <Card>
          <CardHeader>
            <Heading size="md">📊 Últimas Atividades</Heading>
          </CardHeader>
          <CardBody>
            <VStack spacing={3} align="stretch">
              <Box p={3} bg="gray.50" borderRadius="md">
                <Text fontWeight="medium">Publicou um novo post</Text>
                <Text fontSize="sm" color="gray.600">Há 2 horas</Text>
              </Box>
              <Box p={3} bg="gray.50" borderRadius="md">
                <Text fontWeight="medium">Comentou no post do João</Text>
                <Text fontSize="sm" color="gray.600">Há 1 dia</Text>
              </Box>
              <Box p={3} bg="gray.50" borderRadius="md">
                <Text fontWeight="medium">Adicionou nova foto de perfil</Text>
                <Text fontSize="sm" color="gray.600">Há 3 dias</Text>
              </Box>
            </VStack>
          </CardBody>
        </Card>

      </VStack>
    </Box>
  );
};

export default Profile;