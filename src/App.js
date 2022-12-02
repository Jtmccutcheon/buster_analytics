import { Routes, Route } from 'react-router-dom';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
import { Header } from './components/Header';
import { Graphs } from './components/Graphs';
import { Season } from './components/Season';
import { Awards } from './components/Awards';

import './styles.css';

export default function App() {
  const client = new GraphQLClient({
    url: 'https://busterq.onrender.com/graphql',
    cache: memCache(),
  });

  return (
    <div className="App">
      <ClientContext.Provider value={client}>
        <Header />
        <Routes>
          <Route path="/" element={<Graphs />} />
          <Route path="/season" element={<Season />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </ClientContext.Provider>
    </div>
  );
}
