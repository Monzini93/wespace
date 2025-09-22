import { Flex, Heading, HStack, Avatar, Menu, MenuButton, MenuList, MenuItem, MenuDivider, IconButton } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = ({ onViewChange, onLogout }) => {
  const handleLogoClick = () => {
    onViewChange('feed');
  };

  return (
    <Flex 
      as="nav" 
      align="center" 
      justify="space-between" 
      p={4} 
      bg="white" 
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      {/* Logo clicável */}
      <Heading 
        size="lg" 
        color="purple.600" 
        cursor="pointer"
        onClick={handleLogoClick}
        _hover={{ color: "purple.700" }}
      >
        Wespace
      </Heading>
      
      <HStack spacing={4}>
        {/* Menu do usuário */}
        <Menu>
          <MenuButton 
            as={IconButton}
            aria-label="Opções do usuário"
            icon={<Avatar name="Admin" size="sm" bg="purple.500" color="white" />}
            variant="ghost"
            borderRadius="full"
          />
          <MenuList>
            <MenuItem onClick={() => onViewChange('profile')}>
              👤 Meu Perfil
            </MenuItem>
            <MenuItem onClick={() => onViewChange('admin')}>
              🛠️ Painel Administrativo
            </MenuItem>
            <MenuDivider />
            <MenuItem color="red.500" onClick={onLogout}>
              🚪 Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Navbar;