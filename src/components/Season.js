import { useState, useReducer } from 'react';
import { useQuery } from 'graphql-hooks';
import { BUSTERS_BY_YEAR } from '../queries';
import { initialBusters, seasonBusters } from '../reducers/seasonBusters';
import { createScatterData } from './utils/createScatterData';
import useWindowSize from '../hooks/useWindowSize';
import { Loading } from './common/Loading';
import { Error } from './common/Error';
import { BusterList } from './season/BusterList';
import { SeasonTitle } from './season/SeasonTitle';
import { SelectedBuster } from './season/SelectedBusters';
import { BusterScatter } from './graphs/BusterScatter';

export const Season = () => {
  const year = new Date().getFullYear().toString();
  const { loading, error, data } = useQuery(BUSTERS_BY_YEAR, {
    variables: { year },
  });

  const [showMenu, setShowMenu] = useState(true);
  const [userSelectedBusters, dispatchUserSelectedBusters] = useReducer(
    seasonBusters,
    initialBusters,
  );
  const { width } = useWindowSize();
  const toggleMenu = () => setShowMenu(!showMenu);
  const d = createScatterData(userSelectedBusters);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <div className={showMenu ? 'stats' : 'stats_collapsed'}>
        <BusterList
          showMenu={showMenu}
          toggleMenu={toggleMenu}
          width={width}
          data={data}
          dispatchUserSelectedBusters={dispatchUserSelectedBusters}
          userSelectedBusters={userSelectedBusters}
        />
        <div className={showMenu ? 'right' : 'right_collapsed'}>
          <SeasonTitle busters={userSelectedBusters} />
          <BusterScatter data={d} busters={userSelectedBusters} />
          <SelectedBuster
            showMenu={showMenu}
            userSelectedBusters={userSelectedBusters}
          />
        </div>
      </div>
    </div>
  );
};
