import { useState, useReducer } from 'react';
import { useQuery } from 'graphql-hooks';
import { BUSTERS_BY_YEAR } from '../queries';
import { createScatterData } from './utils/createScatterData';
import useWindowSize from '../hooks/useWindowSize';
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
  const { width } = useWindowSize();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something Bad Happened</div>;

  const toggleMenu = () => setShowMenu(!showMenu);
  const d = createScatterData(userSelectedBusters);

  const leftStyles = {
    [!showMenu]: 'left_collapsed',
    [showMenu]: 'left',
    [showMenu && width < 600]: ['left', 'left_mobile'].join(' '),
  }.true;

  return (
    <div>
      <div className={showMenu ? 'stats' : 'stats_collapsed'}>
        <div className={leftStyles}>
          <BusterList
            showMenu={showMenu}
            width={width}
            data={data}
            dispatchUserSelectedBusters={dispatchUserSelectedBusters}
            userSelectedBusters={userSelectedBusters}
          />
          <ArrowIcon toggleMenu={toggleMenu} showMenu={showMenu} />
        </div>
        <div className={showMenu ? 'right' : 'right_collapsed'}>
          <div className={'season'}>
            {new Date().getFullYear()} Season
            {userSelectedBusters.length < 1 && <div>Select a Buster</div>}
          </div>
          <SelectedBuster
            showMenu={showMenu}
            userSelectedBusters={userSelectedBusters}
          />
          <div className="stats_graph">
            <BusterScatter data={d} busters={userSelectedBusters} />
          </div>
        </div>
      </div>
    </div>
  );
};
