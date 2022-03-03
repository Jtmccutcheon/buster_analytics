import { useState, useReducer } from 'react';
import { useQuery } from 'graphql-hooks';
import { BUSTERS_BY_YEAR } from '../queries';
import { createScatterData } from './utils/createScatterData';
import { BusterList } from './stats/BusterList';
import { ArrowIcon } from './stats/ArrowIcon';
import { SelectedBuster } from './stats/SelectedBusters';
import { BusterScatter } from './graphs/BusterScatter';

const initialBusters = [];
// this has different logic than the other reducer grom Graphs cannot be shared
const busterReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BUSTER':
      return state.find(b => b.id === action.payload.id)
        ? state.filter(b => b.id !== action.payload.id)
        : [...state, action.payload];

    case 'RESET':
      return initialBusters;
    default:
      throw new Error();
  }
};

export const Stats = () => {
  const year = new Date().getFullYear().toString();
  const { loading, error, data } = useQuery(BUSTERS_BY_YEAR, {
    variables: { year },
  });
  const [showMenu, setShowMenu] = useState(true);
  const [userSelectedBusters, dispatchUserSelectedBusters] = useReducer(
    busterReducer,
    initialBusters,
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  const toggleMenu = () => setShowMenu(!showMenu);
  const d = createScatterData(userSelectedBusters);

  return (
    <div>
      <div className={showMenu ? 'stats' : 'stats_collapsed'}>
        <div className="left">
          <BusterList
            showMenu={showMenu}
            data={data}
            dispatchUserSelectedBusters={dispatchUserSelectedBusters}
            userSelectedBusters={userSelectedBusters}
          />
          <ArrowIcon toggleMenu={toggleMenu} showMenu={showMenu} />
        </div>
        <div className="right">
          <div
            className={showMenu ? 'right_content' : 'right_content_collapsed'}
          >
            <div className="season">{new Date().getFullYear()} Stats</div>
            {userSelectedBusters.length < 1 && <div>Select a Buster</div>}
            <SelectedBuster userSelectedBusters={userSelectedBusters} />
            <div className="stats_graph">
              <BusterScatter data={d} busters={userSelectedBusters} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
