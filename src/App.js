import { GraphQLClient, ClientContext } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
import { Graphs } from './components/Graphs';

import './styles.css';

export default function App() {
  const client = new GraphQLClient({
    url: 'https://busterq.herokuapp.com/graphql',
    cache: memCache(),
  });

  return (
    <div className="App">
      <ClientContext.Provider value={client}>
        <Graphs />
      </ClientContext.Provider>
    </div>
  );
}
