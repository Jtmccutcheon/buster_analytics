import { useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { BUSTER_HISTORY } from '../queries';

export const Awards = () => {
  const thisYear = new Date().getFullYear().toString();
  const [year, setYear] = useState(thisYear);

  const { loading, error, data } = useQuery(BUSTER_HISTORY, {
    variables: { year },
  });

  // netlify requires everything to be defined and used so placeholder
  const changeYear = () => setYear('');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  console.log({ data });
  return <div onClick={changeYear}>Awards</div>;
};
