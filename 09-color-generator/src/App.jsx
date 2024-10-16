import { useState } from 'react';
import ColorList from './components/ColorList';
import Form from './components/Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  function addColor(color) {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (err) {
      toast.error(err.message);
    }
  }
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer />
    </main>
  );
};
export default App;
