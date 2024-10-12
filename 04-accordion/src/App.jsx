import { useState } from 'react';
import data from './data';

import Questions from './component/Questions';

const App = () => {
  const [questions, setQuestion] = useState(data);
  const [selectedId, setSelectedId] = useState(null);

  function handleToggle(id) {
    setSelectedId((currentId) => (currentId === id ? null : id));
  }
  return (
    <main>
      <Questions
        questions={questions}
        selectedId={selectedId}
        handleToggle={handleToggle}
      />
    </main>
  );
};
export default App;
