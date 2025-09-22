import { Flex, Heading, Button, HStack, Avatar } from '@chakra-ui/react';

const Navbar = ({ onViewChange, currentView }) => {
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
      <Heading size="lg" color="purple.600">
        Wespace
      </Heading>
      
      <HStack spacing={4}>
        <Button 
          variant={currentView === 'feed' ? 'solid' : 'outline'}
          colorScheme="purple"
          onClick={() => onViewChange('feed')}
        >
          Feed
        </Button>
        
        <Button 
          variant={currentView === 'admin' ? 'solid' : 'outline'}
          colorScheme="purple"
          onClick={() => onViewChange('admin')}
        >
          🛠️ Admin
        </Button>
        
        <Avatar name="Admin" size="sm" />
      </HStack>
    </Flex>
  );
};

export default Navbar;