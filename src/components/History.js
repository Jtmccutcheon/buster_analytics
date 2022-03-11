import { useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { BUSTER_HISTORY } from '../queries';

export const History = () => {
  const thisYear = new Date().getFullYear().toString();
  const [year, setYear] = useState(thisYear);

  const { loading, error, data } = useQuery(BUSTER_HISTORY, {
    variables: { year },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  console.log({ data });
  return <div>History</div>;
};
