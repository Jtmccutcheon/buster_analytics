import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { Graphs } from './components/Graphs';

import './styles.css';

export default function App() {
  const client = new GraphQLClient({
    url: 'https://busterq.herokuapp.com/graphql',
  });

  client.setHeader('Access-Control-Allow-Origin', '*');
  return (
    <div className="App">
      <ClientContext.Provider value={client}>
        <Graphs />
      </ClientContext.Provider>
    </div>
  );
}
