import { Routes, Route } from 'react-router-dom';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
import { Header } from './components/Header';
import { Graphs } from './components/Graphs';
import { Stats } from './components/Stats';
import { History } from './components/History';

import './styles.css';

export default function App() {
  const client = new GraphQLClient({
    url: 'https://busterq.herokuapp.com/graphql',
    cache: memCache(),
  });

  return (
    <div className="App">
      <ClientContext.Provider value={client}>
        <Header />
        <Routes>
          <Route path="/" element={<Graphs />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </ClientContext.Provider>
    </div>
  );
}
