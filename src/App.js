import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import Profile from './components/Profile';

// 🆕 Importações do chat
import ChatWindow from './components/Chat/ChatWindow';
import Feed from './components/Feed';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('feed');

  // 🆕 Estado do chat
  const [activeChatContact, setActiveChatContact] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('feed');
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  // Se não estiver logado, mostra a tela de login
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  // Renderização condicional
  const renderContent = () => {
    switch (currentView) {
      case 'admin':
        return <AdminPanel />;
      
      case 'profile':
        return <Profile />;
      
      case 'feed':
      default:
        return (
          <Feed onContactClick={(contact) => setActiveChatContact(contact)} />
        );
    }
  };

  return (
    <Box bg="gray.100" minH="100vh">
      <Navbar 
        onViewChange={handleViewChange}
        onLogout={handleLogout}
      />
      {renderContent()}

      {/* 🆕 Renderização condicional do chat */}
      <ChatWindow
        isOpen={!!activeChatContact}
        onClose={() => setActiveChatContact(null)}
        contact={activeChatContact}
      />
    </Box>
  );
}

export default App;
