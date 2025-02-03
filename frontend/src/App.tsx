import React, { useState } from 'react';
import SuperheroForm from './components/SuperheroForm';
import SuperheroList from './components/SuperheroList';

const App: React.FC = () => {
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);

  const handleSuperheroAdded = () => {
    setRefreshFlag((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>Humble Superhero API</h1>
      <SuperheroForm onSuperheroAdded={handleSuperheroAdded} />
      <SuperheroList refreshFlag={refreshFlag} />
    </div>
  );
};

export default App;
