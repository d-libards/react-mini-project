import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';

const App = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </main>
  );
};
export default App;