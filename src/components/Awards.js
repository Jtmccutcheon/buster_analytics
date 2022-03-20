import { useState, useEffect } from 'react';
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

  useEffect(() => {
    console.log(year)

  }, [year])

  // netlify requires everything to be defined and used so placeholder
  const changeYear = (year) => setYear(year);

  if (loading) return <Loading />;
  if (error) return <Error />;
  console.log(year);
  console.log({ data });
  return (
  <>
  <select onChange={(e) => changeYear(e.target.value)} name='year' id='year' value={year} >
    <option value='2022'>2022</option>
    <option value='2021'>2021</option>
  </select>

  <h5>Buster of the year</h5>
  {data.bustersOTY.length >= 1 &&  data.bustersOTY.map((BOY) => (

    BOY.busters.map((BusterOfYear) => {
      console.log(BusterOfYear)
    return (
    <>
    <img src={BusterOfYear.avatarUrl} />
    <p>{`${BusterOfYear.username} with ${BusterOfYear.datesWon.length} busts`}</p>
    </>
    )
  }
  
    )
  ))}
  
  </>
  )
};
