import { useContext, useState, createContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, toggleSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
