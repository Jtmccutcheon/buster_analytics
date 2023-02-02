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

  const years = ['2021', '2022', '2023'];

  const changeYear = e => setYear(e.target.value);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const fakeTitle = year === '2021' ? '*' : '';

  console.log({ data });
  const { bustersOTY, bustersOTM } = data;
  return (
    <div>
      <h1 className="awards_title">Awards</h1>
      <select
        className="awards_select"
        value={year}
        onChange={e => changeYear(e)}
      >
        {years.map(y => (
          <option key={y}>{y}</option>
        ))}
      </select>
      <div>
        {bustersOTY.length > 0 &&
          bustersOTY.map(boty => (
            <div key={boty.year}>
              <div className="awards_buster_title">
                BOTY {boty.year}
                {fakeTitle}
              </div>
              <div className="awards_buster_group">
                {boty.busters.map(b => (
                  <div className="awards_avatar_name" key={b.id}>
                    <img
                      className="awards_avatar_img"
                      src={b.avatarUrl}
                      alt="discord_ava"
                    ></img>
                    <div>{b.username}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div>
        {bustersOTM.length > 0 &&
          bustersOTM.map(boty => (
            <div key={bustersOTM.month}>
              <div className="awards_buster_title">
                BOTM {boty.month} {boty.year}
              </div>
              <div className="awards_buster_group">
                {boty.busters.map(b => (
                  <div className="awards_avatar_name" key={b.id}>
                    <img
                      className="awards_avatar_img"
                      src={b.avatarUrl}
                      alt="discord_ava"
                    ></img>
                    <div>{b.username}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
