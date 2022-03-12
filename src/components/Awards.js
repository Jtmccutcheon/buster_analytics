import { useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { BUSTER_AWARDS } from '../queries';
import { Loading } from './common/Loading';
import { Error } from './common/Error';

export const Awards = () => {
  const thisYear = new Date().getFullYear().toString();
  const [year, setYear] = useState(thisYear);

  const { loading, error, data } = useQuery(BUSTER_AWARDS, {
    variables: { year },
  });

  // netlify requires everything to be defined and used so placeholder
  const changeYear = () => setYear('');

  if (loading) return <Loading />;
  if (error) return <Error />;

  console.log({ data });
  return <div onClick={changeYear}>Awards</div>;
};
